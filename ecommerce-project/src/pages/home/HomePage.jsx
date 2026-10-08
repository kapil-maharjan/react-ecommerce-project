import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";

// 💡 1. Add live Render backend URL constant
const BASE_URL = "https://ecommerce-backend-hs0o.onrender.com";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  // useEffect(() => {
  //   const getHomeData = async() => {

  //     const urlPath = search ? `/api/products?search=${search}` : '/api/products';
  //     const response = await axios.get(urlPath);
  //     setProducts(response.data);
  //   };

  //   getHomeData();
  // }, [search]);

  useEffect(() => {
    const getHomeData = async () => {
      // 💡 2. Prepend BASE_URL to both paths so it works for normal browsing AND search inputs
      const urlPath = search
        ? `${BASE_URL}/api/products?search=${search}`
        : `${BASE_URL}/api/products`;

      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    getHomeData();
  }, [search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href="/home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
