import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import React, { useContext } from "react";
import { GlobalTheme } from "../context/ThemeContext";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import AuthBtn from "./AuthBtn";
const Header = () => {
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();

  const { toggleMode } = useContext(GlobalTheme);

  const { t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  {t("header.0")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <AuthBtn />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/wishlist">
                  <i className="fa-regular fa-heart"></i>
                  {wishlistItems.length / 2}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <i className="fa-solid fa-basket-shopping"></i>
                  {items.length === 0 ? "" : items.length}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  {t("header.1")}
                </NavLink>
              </li>
              <Select
                defaultValue={i18n.language}
                style={{
                  width: 120,
                }}
                onChange={changeLang}
                options={[
                  {
                    value: "en",
                    label: "En",
                  },
                  {
                    value: "az",
                    label: "Az",
                  },
                ]}
              />
              <li className="nav-item">
                <button onClick={toggleMode}>Change mode</button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {t("header.title")}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
