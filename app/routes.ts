import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/_layout.tsx", [
    index("./routes/home.tsx"),
    route("admin", "./routes/admin.tsx"),
  ]),
] satisfies RouteConfig;
