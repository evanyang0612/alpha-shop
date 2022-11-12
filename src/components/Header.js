import React, { useContext } from "react";
import { ReactComponent as IconToggle } from "../icons/toggle.svg";
import { ReactComponent as IconSearch } from "../icons/search.svg";
import { ReactComponent as IconCart } from "../icons/cart.svg";
import { ReactComponent as IconMoon } from "../icons/moon.svg";
import { ReactComponent as IconSun } from "../icons/sun.svg";
import { ReactComponent as IconLogo } from "../icons/logo.svg";

import { Context } from "../Context";

export default function Header() {
  const { darkMode, toggleDarkMode, cartItems } = useContext(Context);

  const itemCount = cartItems.reduce((acc, cur) => cur.quantity + acc, 0);

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* Navbar-toggle */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <IconToggle className="icon-toggle cursor-point" />
          </label>
          {/* Navbar-menu */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              <li className="nav-item">
                <IconSearch className="nav-icon cursor-point" />
              </li>
              <li className="nav-item cart-icon">
                <span className="item-count">{itemCount}</span>
                <IconCart className="nav-icon cursor-point" />
              </li>
              <li id="theme-toggle" className="nav-item">
                {darkMode ? (
                  <IconSun
                    className="nav-icon cursor-point"
                    onClick={toggleDarkMode}
                  />
                ) : (
                  <IconMoon
                    className="nav-icon cursor-point"
                    onClick={toggleDarkMode}
                  />
                )}
              </li>
            </ul>
          </nav>
          <a className="header-logo-container" href="/#">
            <IconLogo className="icon-logo cursor-point" />
          </a>
        </div>
      </header>
    </>
  );
}
