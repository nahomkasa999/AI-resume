import { NextResponse } from 'next/server';

export async function GET() {
  const FIGMA_CLIENT_ID = process.env.NEXT_PUBLIC_FIGMA_CLIENT_ID;
  
  if (!FIGMA_CLIENT_ID) {
    return NextResponse.json({
      error: 'NEXT_PUBLIC_FIGMA_CLIENT_ID is not set in .env.local'
    }, { status: 500 });
  }

  return NextResponse.json({
    message: 'To authenticate with Figma, visit:',
    authUrl: '/api/figma/auth'
  });
} 