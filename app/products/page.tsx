"use client";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  sku: string;
  description: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError(data?.error || "Unexpected response from API.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error)
    return <div style={{ color: "red" }}>Error loading products: {error}</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div>
      <h2>Products</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>SKU</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {p.name}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {p.price} USD
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {p.sku}
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
