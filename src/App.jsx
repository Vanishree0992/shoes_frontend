import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from './components/Categories';
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderPlaced from "./pages/OrderPlaced";
import TrackOrder from "./pages/TrackOrder";
import LoginRegister from "./pages/LoginRegister";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home";
import About from "./pages/about";
import CategoryPage from "./pages/CategoryPage"
import BackButton from "./components/BackButton";
import Detail from "./pages/detail"; 

export default function App() {
  return (
    <Router>
      <Navbar />
      <BackButton />
      <Categories />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Detail />} /> 
        <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/auth" element={<LoginRegister />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
