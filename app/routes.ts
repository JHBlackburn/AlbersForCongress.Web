import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("events", "routes/events.tsx"),
  route("donate", "routes/donate.tsx"),
  route("volunteer", "routes/volunteer.tsx"),
  route("get-involved", "routes/get-involved.tsx"),
  route("accessibility-statement", "routes/accessibility-statement.tsx"),
  route("issues", "routes/issues.tsx"),
  route("issues/national", "routes/issues/national.tsx"),
  route("issues/local", "routes/issues/local.tsx"),
] satisfies RouteConfig;
