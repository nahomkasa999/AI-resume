import { NextResponse } from 'next/server';

const FIGMA_CLIENT_ID = process.env.NEXT_PUBLIC_FIGMA_CLIENT_ID;
// Make sure this matches EXACTLY what you registered in Figma
const REDIRECT_URI = 'http://localhost:3000/api/figma/callback';

export async function GET() {
  if (!FIGMA_CLIENT_ID) {
    return NextResponse.json({
      error: 'FIGMA_CLIENT_ID is not configured'
    }, { status: 500 });
  }

  const authUrl = `https://www.figma.com/oauth?client_id=${FIGMA_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=files:read&response_type=code&state=random123`;

  return NextResponse.redirect(authUrl);
}
