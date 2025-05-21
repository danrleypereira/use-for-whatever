import Dashboard from "~/pages/Dashboard";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - FMP" },
    { name: "description", content: "FMP Dashboard" },
  ];
}

export default function Home() {
  return <Dashboard />;
}
