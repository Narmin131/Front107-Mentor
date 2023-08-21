
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
import React, { useContext } from "react";
import { GlobalTheme } from "../context/ThemeContext";
const AppRouter = () => {

  const {darkMode} = useContext(GlobalTheme)
  return (
    <>
      <main className={darkMode ? 'dark' : 'light'}>
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
                  <Route path="/about" element={<About />} />
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
