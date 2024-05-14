import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Purchase from "./pages/Purchase";
import InstallmentPage from "./pages/InstallmentPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import OrderHistory from "./pages/OrderHistory";
import ProfileForm from "./components/ProfileForm";
import FormInstallment from "./components/FormInstallment";
import InstallmentStatus from "./components/InstallmentStatus";
import ControlPanel from "./pages/ControlPanel";
import UserInstallmentProducts from "./components/UserInstallmentProducts";
import RemainingOrders from "./components/RemainingOrders";
import Crud from "./components/Crud";
import InstallmentRequests from "./components/InstallmentRequests";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<ProfileForm />} />
          <Route path="installment-status" element={<InstallmentStatus />} />
          <Route
            path="installment-products"
            element={<UserInstallmentProducts />}
          />
        </Route>
        <Route path="/shop/product" element={<ProductPage />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="Shop/installment" element={<InstallmentPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/control-panel" element={<ControlPanel />}>
        <Route path="dashboard" element={<Dashboard />} />
          <Route path="crud" element={<Crud />} />
          <Route path="remaining-orders" element={<RemainingOrders />} />
          <Route path="installment-requests" element={<InstallmentRequests />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
