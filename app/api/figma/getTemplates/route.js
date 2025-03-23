import { getFigmaFile, getFigmaImages } from '@/app/lib/figma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get the Figma file data
    const figmaData = await getFigmaFile();
    
    // Extract template frames
    const templates = [];
    const nodeIds = [];

    // Find frames named "template:category:name"
    function findTemplateFrames(node) {
      if (node.type === 'FRAME' && node.name.startsWith('template:')) {
        const [_, category, name] = node.name.split(':');
        templates.push({
          id: node.id,
          name: name.trim(),
          category: category.trim(),
          nodeId: node.id,
          description: node.description || '',
        });
        nodeIds.push(node.id);
      }

      if (node.children) {
        node.children.forEach(findTemplateFrames);
      }
    }

    findTemplateFrames(figmaData.document);

    // Get image URLs for templates
    const images = await getFigmaImages(nodeIds);

    // Combine template data with images
    const templatesWithImages = templates.map(template => ({
      ...template,
      imageUrl: images.images[template.nodeId],
    }));

    return NextResponse.json(templatesWithImages);
  } catch (error) {
    console.error('Error in getTemplates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}
