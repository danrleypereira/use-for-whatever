import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Determine active state for navbar based on current path
  const getActiveNavItem = () => {
    if (currentPath.startsWith("/admin")) {
      return "admin";
    }
    return "deals";
  };
  
  return (
    <div className="app-container">
      <Navbar active={getActiveNavItem()} />
      <div className="content-container d-flex">
        <Sidebar />
        <main id="content" className="mt-2 kds-grid flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;