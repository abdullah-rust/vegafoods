import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

// import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Wishlist from "./pages/wishlist/Wishlist";
import SinglePage from "./pages/singlePage/SinglePage";
import Checkout from "./pages/checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";

// import Components
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};
function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single-product" element={<SinglePage />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
