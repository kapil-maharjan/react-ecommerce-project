import { Link } from "react-router-dom";
import { OrderHeader } from "./OrderHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

export function OrdersGrid({ orders, loadCart }) {
  // 💡 ตัวป้องกันสเต็ปที่ 1: ถ้าไม่มีข้อมูล หรือข้อมูลไม่ใช่ Array ให้ส่งกล่องเปล่าไปก่อน หน้าเว็บจะไม่แครช
  if (!orders || !Array.isArray(orders) || orders.length === 0) {
    return (
      <div
        className="orders-grid"
        style={{ textAlign: "center", padding: "40px" }}
      >
        <p>You haven't placed any orders yet.</p>
        <Link className="link-primary" to="/">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />
            {/* 💡 ตัวป้องกันสเต็ปที่ 2: ตรวจเช็กโครงสร้างข้อมูลภายในออเดอร์ก่อนเรนเดอร์ */}
            <OrderDetailsGrid order={order} loadCart={loadCart} />
          </div>
        );
      })}
    </div>
  );
}
