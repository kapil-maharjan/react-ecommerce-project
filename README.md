# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React E-Commerce Project

A modern e-commerce web application built with **React** and **Vite**, featuring product browsing, order tracking, and a checkout flow.

## 🚀 Tech Stack

- **React** – UI library
- **Vite** – build tool & dev server
- **JavaScript (ES6+)**
- **CSS** – component-scoped styling
- **ESLint** – code linting

## ✨ Features

- 🏠 Home page with product listings
- 🛒 Checkout flow
- 📦 Orders page
- 🚚 Order tracking page
- 404 Not Found handling
- Reusable Header component across pages

## 📁 Project Structure

```
ecommerce-project/
├── public/
│   └── images/              # Favicons and static images
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── checkout/
│   │   ├── HomePage.jsx
│   │   ├── OrdersPage.jsx
│   │   ├── TrackingPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/kapil-maharjan/react-ecommerce-project.git
cd react-ecommerce-project
npm install
```

### Running locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Building for production

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
