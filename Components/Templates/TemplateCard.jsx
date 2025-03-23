const TemplateCard = ({ template, onSelect }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Template Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={template.imageUrl}
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onSelect(template)}
            className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            Use Template
          </button>
        </div>
      </div>
      
      {/* Template Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{template.name}</h3>
        <p className="text-sm text-gray-600 capitalize">{template.category}</p>
      </div>
    </div>
  );
};

export default TemplateCard;
