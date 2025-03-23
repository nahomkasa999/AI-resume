import { NextResponse } from 'next/server';

const FIGMA_CLIENT_ID = process.env.NEXT_PUBLIC_FIGMA_CLIENT_ID;
const FIGMA_CLIENT_SECRET = process.env.FIGMA_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/api/figma/callback';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  console.log('Received code:', code); // Debug log

  if (!code) {
    return NextResponse.json({
      error: 'No authorization code received'
    }, { status: 400 });
  }

  try {
    console.log('Attempting token exchange...'); // Debug log
    
    const tokenResponse = await fetch('https://api.figma.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: FIGMA_CLIENT_ID,
        client_secret: FIGMA_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code: code,
        grant_type: 'authorization_code'
      })
    });

    console.log('Token response status:', tokenResponse.status); // Debug log

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Token response error:', errorData); // Debug log
      throw new Error(`Token request failed: ${errorData}`);
    }

    const tokenData = await tokenResponse.json();
    console.log('Token received successfully'); // Debug log

    // Store the token securely (implement this based on your needs)
    // For now, just return success
    return NextResponse.json({
      status: 'success',
      message: 'Authentication successful',
      // Don't expose the full token in production
      access_token: tokenData.access_token
    });

  } catch (error) {
    console.error('Detailed error:', error); // Debug log
    return NextResponse.json({
      error: 'Failed to authenticate with Figma',
      details: error.message
    }, { status: 500 });
  }
} 