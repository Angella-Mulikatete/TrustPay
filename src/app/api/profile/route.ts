// app/api/profile/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 });
  }

  const { db } = await connectToDatabase();
  const profile = await db.collection('profiles').findOne({ walletAddress: address });

  return NextResponse.json({ exists: !!profile });
}