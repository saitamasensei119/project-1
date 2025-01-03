import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"; // Import header
import Footer from "./components/Footer/Footer"; // Import footer
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"; // Import trang danh mục
import HomePage from "./pages/HomePage/HomePage"; // Giả sử HomePage là trang chủ
import CategoryPhone from "./pages/CategoriesPage/CategoryPhone";
import CategoryLaptop from "./pages/CategoriesPage/CategoryLaptop";
import CategoryAccessories from "./pages/CategoriesPage/CategoryAccessories";
import CategoryWatch from "./pages/CategoriesPage/CategoryWatch";
import ProductDetail from "./pages/CategoriesPage/ProductDetail";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import ForgotPassword from "./components/Login/ForgotPassword";
import Promotions from "./components/Promotions/Promotions";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/phone" element={<CategoryPhone />} />
        <Route path="/categories/laptop" element={<CategoryLaptop />} />
        <Route
          path="/categories/accessories"
          element={<CategoryAccessories />}
        />
        <Route path="/categories/watch" element={<CategoryWatch />} />
        <Route path="/categories/:category/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contact" element={<Contact/>}/>
        {/* Các route khác nếu có */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
