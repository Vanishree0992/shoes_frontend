import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterBox({ styles, sizes, brands, colors, onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false);
  const [openFilter, setOpenFilter] = useState(null);
  const [showSort, setShowSort] = useState(false);

  const toggleFilter = (filter) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  const filters = [
    { name: "Style", values: styles || [] },
    { name: "Size", values: sizes || [] },
    { name: "Brand", values: brands || [] },
    { name: "Color", values: colors || [] },
  ];

  const sortOptions = [
    { label: "Featured", value: "is_featured" },
    { label: "New Arrivals", value: "created_at" },
    { label: "Price: Low to High", value: "price" },
    { label: "Price: High to Low", value: "-price" },
    { label: "Overall Rating", value: "-rating" },
  ];

  // Handle filter selection
  const handleFilterClick = (filterName, value) => {
    onFilterChange((prev) => {
      const newFilters = { ...prev, [filterName]: value };

      // Trigger ProductList update
      return newFilters;
    });
  };

  // Handle sort selection
  const handleSortClick = (sortValue) => {
    onFilterChange((prev) => {
      const newFilters = { ...prev, ordering: sortValue };
      return newFilters;
    });
    setShowSort(false);
  };

  return (
    <div className="mx-auto max-w-7xl flex items-center justify-between gap-6 mb-6 px-6">
      {/* Filter Bar */}
      <div className="flex-1 bg-white shadow-md flex items-center px-4 py-3 rounded-md">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="text-black font-bold text-2xl hover:underline mr-6 ml-2"
        >
          Filter
        </button>

        {showFilters && (
          <div className="flex gap-4 flex-wrap">
            {filters.map((filter) => (
              <div key={filter.name} className="relative">
                <button
                  onClick={() => toggleFilter(filter.name)}
                  className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md text-gray-800 font-medium hover:bg-gray-300 transition"
                >
                  {filter.name}
                  <ChevronDown size={16} />
                </button>
                {openFilter === filter.name && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-md z-10 min-w-[150px]">
                    {filter.values.map((val) => (
                      <button
                        key={val}
                        onClick={() => handleFilterClick(filter.name.toLowerCase(), val)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sort Button */}
      <div className="relative">
        <button
          onClick={() => setShowSort((prev) => !prev)}
          className="bg-[#2F4F4F] text-white px-8 py-4 rounded-md text-lg font-semibold hover:transition shadow-md flex items-center gap-2"
        >
          Sort
          <ChevronDown size={18} />
        </button>
        {showSort && (
          <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-20">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSortClick(option.value)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
