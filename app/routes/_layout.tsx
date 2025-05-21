import { Outlet } from "react-router";

import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";

import type { Route } from "./+types/_layout";

export function meta({}: Route.MetaArgs) {
  return [{ title: "FMP Application" }];
}

export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container d-flex">
        <Sidebar />
        <main id="content" className="mt-2 kds-grid flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
