import React from "react";
import { Link, useLocation } from "react-router";

// Type for sidebar items
interface SidebarItem {
  label: string;
  url: string;
  active?: boolean;
  children?: SidebarItem[];
}

interface SidebarProps {
  items?: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items = [] }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Default sidebar items if none provided
  const defaultItems: SidebarItem[] = [
    { label: "Home", url: "/" },
    {
      label: "Deals",
      url: "/deals",
      children: [
        { label: "Active Deals", url: "/deals/active" },
        { label: "Archived Deals", url: "/deals/archived" },
      ],
    },
    { label: "Reports", url: "/reports" },
  ];

  const sidebarItems = items.length > 0 ? items : defaultItems;

  // Check if a link is currently active
  const isActive = (url: string) => currentPath === url;

  return (
    <nav
      id="sidebar"
      className="vh-100 kds-2 kds-float-left kds-list--menu me-2"
    >
      <div className="d-flex flex-column flex-shrink-0 p-2 pt-5">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4"></span>
        </Link>

        <ul className="nav nav-pills flex-column mb-auto">
          {sidebarItems.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`kds-list-item ${isActive(item.url) ? "kds-list-item--active" : ""}`}
              >
                <Link to={item.url} className="kds-list-item-content">
                  {item.label}
                </Link>
              </li>

              {item.children && item.children.length > 0 && (
                <ul className="nav nav-pills flex-column mb-auto">
                  {item.children.map((subitem, subindex) => (
                    <li
                      key={subindex}
                      className={`kds-list-item ${isActive(subitem.url) ? "kds-list-item--active" : ""}`}
                    >
                      <Link to={subitem.url} className="kds-list-item-content">
                        {subitem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
