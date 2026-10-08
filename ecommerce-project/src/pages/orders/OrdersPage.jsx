import { Header } from "../../components/Header";
import "./OrdersPage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrdersGrid } from "./OrdersGrid";

const BASE_URL = "https://ecommerce-backend-hs0o.onrender.com";

export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get(`${BASE_URL}/api/orders`);
      setOrders(response.data);
    };

    fetchOrdersData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/png" href="/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
