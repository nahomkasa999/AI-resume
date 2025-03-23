const TemplateFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          selectedCategory === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All Templates
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TemplateFilter;
