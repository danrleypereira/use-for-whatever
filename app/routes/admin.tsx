import Admin from "~/pages/Admin";

import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin - FMP" },
    { name: "description", content: "FMP Admin Page" },
  ];
}

export default function AdminRoute() {
  return <Admin />;
}
