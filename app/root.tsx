import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import RetiredPage from "./components/RetiredPage";
import { retirementHeaders, retirementTitle } from "./retirement";

export const links: Route.LinksFunction = () => [];

export const meta: Route.MetaFunction = () => [
  { title: retirementTitle },
];

export const headers: Route.HeadersFunction = () => retirementHeaders;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="min-h-dvh bg-neutral-950 text-neutral-100 flex items-center justify-center px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const status = isRouteErrorResponse(error) ? error.status : 410;
  const statusText = isRouteErrorResponse(error) ? error.statusText : "Gone";

  return <RetiredPage status={status} statusText={statusText || "Gone"} />;
}
