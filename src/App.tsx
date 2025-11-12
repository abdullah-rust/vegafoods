import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";

// Components
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

// Lazy-loaded pages
import Home from "./pages/home/Home";
const About = lazy(() => import("./pages/about/About"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist"));
const SinglePage = lazy(() => import("./pages/singlePage/SinglePage"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// ScrollToTop Component
const ScrollToTop: React.FC = () => {
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

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
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
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
