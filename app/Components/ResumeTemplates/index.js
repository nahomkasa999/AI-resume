import Template1 from './Template1';
import Template2 from './Template2';

export const templates = {
  'template1': Template1,
  'template2': Template2,
  // Add more templates
};

export function getTemplateComponent(templateId) {
  return templates[templateId] || Template1; // Default to Template1
} 