import React from "react";
import { Link, useLocation } from "react-router";

interface NavbarProps {
  active?: string;
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine active state based on props or current path
  const isActive = (path: string) => {
    if (active) {
      return active === path;
    }
    return currentPath === path;
  };

  return (
    <header className="kds-header">
      <Link to="/" className="kds-header-brand-link text-decoration-none">
        <div className="kds-header-brand">
          <img
            src="/assets/img/KBRA-icon.png"
            alt="KBRA"
            style={{ height: 48, width: 48 }}
          />
          <h1 className="kds-header-brand-name">FMP</h1>
        </div>
      </Link>

      <nav className="kds-header-nav">
        <ul className="kds-header-nav-list">
          <li
            className={`kds-header-nav-list-item ${isActive("/") ? "active" : ""}`}
          >
            <Link to="/">Deals</Link>
          </li>

          <li
            className={`kds-header-nav-list-item ${isActive("admin") ? "active" : ""}`}
          >
            <div className="header-nav-dropdown">
              <Link to="/admin">
                Admin
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  className="kds-icon-next"
                  fill="currentColor"
                >
                  <path d="M12 16.5l-8-8h16l-8 8z"></path>
                </svg>
              </Link>

              <div className="header-nav-dropdown-content">
                <Link to="/deal-admin/annex-management/all">
                  Annex Management
                </Link>
                <Link to="/deal-admin/exception_rules">
                  Exception Preferences
                </Link>
                <Link to="/admin">Site Administration</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div className="kds-header-utilities">
        <button
          className="kds-btn kds-btn_text kds-button__icon--only kds-header-utilities-button"
          type="button"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24.12"
            width="1em"
            height="1em"
            className="kds-icon-next"
            fill="currentColor"
          >
            <path d="M21.92 19.04l-1-1a3.3 3.3 0 01-1-2.33v-7.1c0-2.9-2.16-5.28-6.25-5.28V1.75a1.75 1.75 0 10-3.5 0v1.58C6.12 3.33 4 5.74 4 8.61v7.15a3.3 3.3 0 01-1 2.33l-1 1a1 1 0 00.7 1.7h7.47v1.58a1.75 1.75 0 003.5 0v-1.62h7.47a1 1 0 001-1 1 1 0 00-.29-.69zm-16.85-.3a5.19 5.19 0 00.93-3V8.61c0-1.81 1.55-3.28 4.28-3.28h3.43c3 0 4.28 1.46 4.29 3.27v7.15a5.19 5.19 0 00.93 3z"></path>
          </svg>
        </button>

        <button
          className="kds-btn kds-btn_text kds-button__icon--only kds-header-utilities-button"
          type="button"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className="kds-icon-next"
            fill="currentColor"
          >
            <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zM6.21 20.15a7.6 7.6 0 015.79-3 7.58 7.58 0 015.78 3 10 10 0 01-11.57 0zm13.17-1.4l-.09.09A9.5 9.5 0 0012 15.17a9.51 9.51 0 00-7.29 3.66l-.09-.08a10 10 0 1114.76 0z"></path>
            <path d="M12 4.15a5.29 5.29 0 105.28 5.3A5.3 5.3 0 0012 4.15zm0 8.57a3.29 3.29 0 113.28-3.3 3.3 3.3 0 01-3.28 3.3z"></path>
          </svg>
          User
        </button>

        <button
          className="kds-btn kds-btn_text kds-button__icon--only kds-header-utilities-button"
          type="button"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className="kds-icon-next"
            fill="currentColor"
          >
            <path d="M15.93 6.58a4.1 4.1 0 00-1.6-1.52 4.56 4.56 0 00-2.26-.56 4.75 4.75 0 00-2.39.58 4.25 4.25 0 00-1.62 1.61A4.66 4.66 0 007.48 9a1.14 1.14 0 00.36.85 1.25 1.25 0 001.64 0A1.12 1.12 0 009.82 9a2.2 2.2 0 01.59-1.62 2.17 2.17 0 011.66-.62A2.25 2.25 0 0113.2 7a1.84 1.84 0 011 1.66 2.45 2.45 0 01-.2 1.22 3.46 3.46 0 01-.67.9l-1 1a4.67 4.67 0 00-1.06 1.53 4.56 4.56 0 00-.4 1.74 1.2 1.2 0 00.34.86 1.23 1.23 0 001.68 0 1.2 1.2 0 00.34-.86 3.61 3.61 0 01.15-.92 1.82 1.82 0 01.56-.85c.45-.42.86-.81 1.23-1.18a5.55 5.55 0 001-1.36 4.13 4.13 0 00.4-1.86 4.15 4.15 0 00-.59-2.2zM13 17.42a1.5 1.5 0 00-2.1 0 1.48 1.48 0 00-.44 1.07 1.54 1.54 0 00.42 1.06 1.51 1.51 0 002.12 0 1.47 1.47 0 00.45-1.06 1.49 1.49 0 00-.45-1.07z"></path>
            <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm7.38 18.75A10 10 0 1122 12a10 10 0 01-2.62 6.75z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
