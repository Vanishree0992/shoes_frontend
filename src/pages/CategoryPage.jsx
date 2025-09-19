import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
import FilterBox from "../components/FilterBox";
import axios from "../api/axios";

export default function CategoryPage() {
  const { slug } = useParams();

  const [filters, setFilters] = useState({
    style: null,
    size: null,
    brand: null,
    color: null,
    ordering: null,
  });

  const [options, setOptions] = useState({
    styles: [],
    sizes: [],
    brands: [],
    colors: [],
  });

  // Fetch filter options from backend
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const res = await axios.get("/filters/");
        setOptions(res.data); // {styles, brands, colors, sizes}
      } catch (err) {
        console.error("Failed to fetch filter options", err);
      }
    };
    fetchFilterOptions();
  }, []);

  return (
    <main className="flex-1 bg-gray-50">
      <FilterBox
        styles={options.styles}
        sizes={options.sizes}
        brands={options.brands}
        colors={options.colors}
        onFilterChange={setFilters}
      />
      <ProductList category={slug} filters={filters} />
    </main>
  );
}
