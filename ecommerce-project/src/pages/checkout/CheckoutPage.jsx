import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutPage.css";
import { PaymentSummary } from "./PaymentSummary";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummary";

// 💡 1. กำหนดค่า URL หลังบ้านบน Render
const BASE_URL = "https://onrender.com";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      // 💡 2. เพิ่ม BASE_URL สำหรับเรียกตัวเลือกการจัดส่ง
      const response = await axios.get(
        `${BASE_URL}/api/delivery-options?expand=estimatedDeliveryTime`,
      );
      setDeliveryOptions(response.data);
    };

    fetchCheckoutData();
  }, []);

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      // 💡 3. เพิ่ม BASE_URL สำหรับการดึงข้อมูลสรุปยอดเงินชำระ
      const response = await axios.get(`${BASE_URL}/api/payment-summary`);
      setPaymentSummary(response.data);
    };

    fetchPaymentSummary();
  }, [cart]);
  return (
    <>
      <link rel="icon" type="image/png" href="/cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
