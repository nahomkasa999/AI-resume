// We'll need a file key from your Figma document
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

// Get Figma file data
export async function getFigmaFile(accessToken) {
  if (!FIGMA_FILE_KEY) {
    throw new Error('FIGMA_FILE_KEY is not configured');
  }

  if (!accessToken) {
    throw new Error('Access token is required');
  }

  try {
    console.log('Fetching Figma file:', FIGMA_FILE_KEY); // Debug log
    
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-Figma-Token': accessToken, // Adding both header formats just in case
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Figma API Error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Detailed error:', error);
    throw error;
  }
}

// Get image URLs for template frames
export async function getFigmaImages(accessToken, nodeIds) {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${nodeIds.join(',')}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Figma images');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching Figma images:', error);
    throw error;
  }
}
