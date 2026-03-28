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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> – {p.price} USD
            <br />
            <small>{p.sku}</small>
            <div>{p.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
