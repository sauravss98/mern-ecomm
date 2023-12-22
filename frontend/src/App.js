import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderComponent from "./components/HeaderComponent.js";
import FooterComponent from "./components/FooterComponent.js";

import HomePage from "./pages/HomePage.js";
import ProductDetailsPage from "./pages/ProductDetailsPage.js";
import ProductListPage from "./pages/ProductListPage.js";
import CartPage from "./pages/CartPage.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage.js";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage.js";
import UserOrdersPage from "./pages/user/UserOrdersPage.js";
import UserProfilePage from "./pages/user/UserProfilePage.js";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent.js";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage.js";
import AdminChatsPage from "./pages/admin/AdminChatsPage.js";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage.js";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage.js";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage.js";
import AdminOrdersDetailsPage from "./pages/admin/AdminOrdersDetailsPage.js";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage.js";
import AdminProductsPage from "./pages/admin/AdminProductsPage.js";
import AdminUsersPage from "./pages/admin/AdminUsersPage.js";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element="404 page does not exist" />
        // user Routes
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>
        // Admin Routes
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-users" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrdersDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
