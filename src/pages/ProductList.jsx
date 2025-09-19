import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "../api/axios";

export default function ProductList({ category, filters }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [viewAll, setViewAll] = useState(false);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Build query params from filters + category
        const params = {};

        if (category) params.category__slug = category;
        if (filters.style) params.style__name = filters.style;
        if (filters.brand) params.brand__name = filters.brand;
        if (filters.size) params.sizes__value = filters.size;
        if (filters.color) params.colors__name = filters.color;
        if (filters.ordering) params.ordering = filters.ordering;

        const response = await axios.get("/products/", { params });

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.results) {
          setProducts(response.data.results);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, filters]); // re-run whenever category or filters change

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!products.length) return <p className="text-center mt-10">No products found.</p>;

  // Show only 12 initially
  const productsToShow = viewAll ? products : products.slice(0, productsPerPage);

  // Show View All button only if more than 12 products exist
  const showViewAll = !viewAll && products.length > productsPerPage;

  return (
    <div className="container mx-auto p-6">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center">
        {productsToShow.map((product) => (
          <div key={product.id} className="h-[500px] w-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* View All Button */}
      {showViewAll && (
        <div className="flex justify-end mt-8">
          <button
            onClick={() => setViewAll(true)}
            className="bg-[#2f4f4f] text-white py-3 px-6 rounded-2xl hover:transition font-bold text-lg"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}
