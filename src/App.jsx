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
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop/product" element={<ProductPage />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="Shop/installment" element={<InstallmentPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
