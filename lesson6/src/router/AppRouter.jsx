import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Header from "../components/Header";
import { DataProvider } from "../context/GlobalContext";
import { CartProvider } from "react-use-cart";
import Cart from "../pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "../pages/Wishlist";
import { WishlistProvider } from "react-use-wishlist";
import React, { useContext, useEffect } from "react";
import { GlobalTheme } from "../context/ThemeContext";
import ProductDetail from "../pages/ProductDetail";
import Shop from "../pages/Shop";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dasboard from "../pages/Dasboard";
import Blogs from "../pages/Blogs";
import AddBlog from "../pages/AddBlog";
import { useSelector } from "react-redux";
import EditBlog from "../pages/EditBlog";
import Btn from "../components/Btn";
const AppRouter = () => {
  const { darkMode } = useContext(GlobalTheme);

  const blogs = useSelector((state) => state.BlogReducer);

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);
  return (
    <>
      <main className={darkMode ? "dark" : "light"}>
        <WishlistProvider>
          <CartProvider>
            <DataProvider>
              <BrowserRouter>
                <ToastContainer
                  position="top-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={true}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover
                  theme="light"
                />
                <Header />
                <Btn/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<Dasboard />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/addBlog" element={<AddBlog />} />
                  <Route path="/editBlog/:id" element={<EditBlog />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
              </BrowserRouter>
            </DataProvider>
          </CartProvider>
        </WishlistProvider>
      </main>
    </>
  );
};

export default AppRouter;
