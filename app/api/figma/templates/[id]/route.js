import { NextResponse } from 'next/server';

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_FIGMA_CLIENT_ACCESS_TOKEN;
const FILE_KEY = process.env.NEXT_PUBLIC_FIGMA_FILE_KEY;

export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Get SVG directly from Figma
    const response = await fetch(
      `https://api.figma.com/v1/images/${FILE_KEY}?ids=${id}&format=svg`,
      {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch template SVG');
    }

    const data = await response.json();
    
    return NextResponse.json({
      template: {
        id,
        svgUrl: data.images[id]
      }
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch template' },
      { status: 500 }
    );
  }
} 