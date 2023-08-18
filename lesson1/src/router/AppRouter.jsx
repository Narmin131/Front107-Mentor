import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/Wishlist";
import Home from "../pages/Home";
import Header from "../components/Header";
import { DataProvider } from "../context/GlobalContext";
import { CartProvider } from "react-use-cart";
import Cart from "../pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "../pages/Wishlist";
import { WishlistProvider } from "react-use-wishlist";

const AppRouter = () => {
  return (
    <>
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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </DataProvider>
        </CartProvider>
      </WishlistProvider>
    </>
  );
};

export default AppRouter;
