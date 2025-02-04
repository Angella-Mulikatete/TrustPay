
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract TrustPay  is ERC721, ReentrancyGuard{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bool    public contractFunded;
    address public business;
    address public client;
    address[] public freelancers;
    uint256 public totalAmount;
    uint256 public contractBalance;
    uint256 public invoiceCount;
    uint256 public milestoneCount;

    IERC20 public paymentToken;


    struct Invoice {
        uint256 invoiceId;
        string details;
        uint256 amount;
        bool paid;
    }

    struct Freelancer{
        address freelancerAddress;
        uint256 hourlyRate;
        uint256 hoursWorked;
        uint256 invoiceId;
        uint256 amount;
    }

    struct Milestone {
        uint256 milestoneId;
        string description;
        uint256 amount;
        bool paid;
        uint256 deadline;
        uint256 completionTime;
        uint256 nftTokenId;  // Reference to the NFT
        bool nftMinted;      // Track if NFT has been minted
    }

    // struct Milestone {
    //     uint256 milestoneId;
    //     string description;
    //     uint256 amount;
    //     bool paid;
    // }

    enum Role { None, Client, Freelancer, Business }
    enum State { Created, Funded, InProgress, Completed, Closed}
    State public state;

    // mapping(uint256 => State) public milestones;
    mapping(uint256 => Invoice) public invoices;
    mapping(uint256 => Milestone) public milestones;
    mapping(uint256 => bool) public milestoneApproved;
    mapping(address => Role) public userRoles;

    event RoleAssigned(address indexed user, Role indexed role);
    event invoiceAdded(string indexed details, uint256 indexed amount);
    event MilestoneNFTMinted(uint256 indexed tokenId, uint256 indexed milestoneId, address indexed freelancer);
    event MilestoneNFTRedeemed(uint256 indexed tokenId, uint256 indexed milestoneId, address indexed freelancer);
    event PaymentReleased(address indexed freelancer, uint256 amount);


    modifier onlyBusiness(){
        require(msg.sender == business, "Only business can perform this action");
        _;
    }

    modifier onlyClient(){
        require(msg.sender == client, "Only client can perform this action");
        _;
    }

    modifier onlyFunded(){
        require(contractFunded, "Contract is not funded");
        _;
    }

    constructor(
        address _client,
        uint256 _totalAmount,
        address _paymentToken
    )ERC721("TrustPay Milestone NFT", "TPNFT"){
        business = msg.sender;
        client = _client;
        totalAmount = _totalAmount;
        contractBalance = _totalAmount;
        paymentToken = IERC20(_paymentToken);
    }


    // Assign a role to a user
    function assignRole(address user, Role role) external {
        require(userRoles[user] == Role.None, "Address already has a role");
        require(
            role == Role.Client || role == Role.Freelancer || role == Role.Business,
            "Invalid role"
        );

        userRoles[user] = role;
        emit RoleAssigned(user, role);
    }

    // Get the role of a user
    function getRole(address user) external view returns (Role) {
        return userRoles[user];
    }

    //Business adds invoice to the contract
    function addInvoice(string memory _details, uint256 _amount) public onlyBusiness {
        require(state == State.Created || state == State.Funded, "Cannot add invoice after contract is completed");
        invoiceCount ++;
        invoices[invoiceCount] = Invoice(invoiceCount, _details, _amount, false);
        emit invoiceAdded(_details, _amount);
    }

    //Business adds freelancer
    function addFreelancer(address freelancer) public onlyBusiness {
        freelancers.push(freelancer);
    }

    //Client funds the contract
    function fundContract() public payable onlyClient {
        require(msg.value == totalAmount, "Client does not have enough funds");
        contractFunded = true;
        state = State.Funded;
        contractBalance += msg.value;
        totalAmount -= msg.value;
    }

    //client pays the invoice
    function payInvoice(uint256 _invoiceId) public onlyClient onlyFunded{
        require(invoices[_invoiceId].amount > 0, "Invoice does not exist");
        require(!invoices[_invoiceId].paid, "Invoice is already paid");
        require(contractBalance >= invoices[_invoiceId].amount, "Insufficient Balance");

        invoices[_invoiceId].paid = true;
        contractBalance -= invoices[_invoiceId].amount;
    }

    //business  can add milestones
    function addMilestone(string memory _description, uint256 _amount) public onlyBusiness {
        require(state == State.Funded, "Contract must be funded to add milestone");
        milestoneCount ++;
        milestones[milestoneCount] = Milestone(milestoneCount, _description, _amount, false);
    }


    // check if address is a freelancer
    function isFreelancer(address account) internal view returns (bool) {
        for (uint i = 0; i < freelancers.length; i++) {
            if (freelancers[i] == account) return true;
        }
        return false;
    }

    // Function to mint NFT when milestone is created
    function mintMilestoneNFT(
        uint256 milestoneId,
        address freelancer,
        string memory tokenURI
    ) external onlyBusiness {
        require(!milestones[milestoneId].nftMinted, "NFT already minted for this milestone");
        require(milestones[milestoneId].amount > 0, "Invalid milestone");

        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(freelancer, newTokenId);
        
        milestoneNFTs[newTokenId] = MilestoneNFT({
            tokenId: newTokenId,
            milestoneId: milestoneId,
            uri: tokenURI,
            redeemed: false,
            amount: milestones[milestoneId].amount,
            freelancer: freelancer
        });

        milestones[milestoneId].nftTokenId = newTokenId;
        milestones[milestoneId].nftMinted = true;

        emit MilestoneNFTMinted(newTokenId, milestoneId, freelancer);
    }

    // Function for client to approve milestone completion
    function approveMilestone(uint256 milestoneId) external onlyClient {
        require(!milestoneApproved[milestoneId], "Milestone already approved");
        require(milestones[milestoneId].nftMinted, "Milestone NFT not minted");
        
        milestoneApproved[milestoneId] = true;
        milestones[milestoneId].completionTime = block.timestamp;
    }

    // Function to redeem NFT and receive payment
    function redeemMilestoneNFT(uint256 tokenId) external nonReentrant {
        require(ownerOf(tokenId) == msg.sender, "Not token owner");
        
        MilestoneNFT storage nft = milestoneNFTs[tokenId];
        require(!nft.redeemed, "NFT already redeemed");
        require(milestoneApproved[nft.milestoneId], "Milestone not approved");
        require(contractBalance >= nft.amount, "Insufficient contract balance");

        nft.redeemed = true;
        milestones[nft.milestoneId].paid = true;
        contractBalance -= nft.amount;

        // Transfer payment to freelancer
        require(
            paymentToken.transfer(nft.freelancer, nft.amount),
            "Payment transfer failed"
        );

        // Burn the NFT after redemption
        _burn(tokenId);

        emit MilestoneNFTRedeemed(tokenId, nft.milestoneId, nft.freelancer);
        emit PaymentReleased(nft.freelancer, nft.amount);
    }

    // Override transfer function to add restrictions
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        require(
            !milestoneNFTs[tokenId].redeemed,
            "Cannot transfer redeemed NFT"
        );
        super.transferFrom(from, to, tokenId);
    }

    // Function to create milestone with NFT
    function createMilestoneWithNFT(
        string memory description,
        uint256 amount,
        uint256 deadline,
        address freelancer,
        string memory tokenURI
    ) external onlyBusiness {
        require(contractFunded, "Contract must be funded");
        
        milestoneCount++;
        
        milestones[milestoneCount] = Milestone({
            milestoneId: milestoneCount,
            description: description,
            amount: amount,
            paid: false,
            deadline: deadline,
            completionTime: 0,
            nftTokenId: 0,
            nftMinted: false
        });

        // Mint the NFT immediately
        mintMilestoneNFT(milestoneCount, freelancer, tokenURI);
    }

    // Function to get milestone NFT details
    function getMilestoneNFTDetails(uint256 tokenId)
        external
        view
        returns (
            uint256 milestoneId,
            string memory uri,
            bool redeemed,
            uint256 amount,
            address freelancer
        )
    {
        MilestoneNFT memory nft = milestoneNFTs[tokenId];
        return (
            nft.milestoneId,
            nft.uri,
            nft.redeemed,
            nft.amount,
            nft.freelancer
        );
    }

}





    