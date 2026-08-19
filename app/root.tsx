import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { retirementMessage, throwGone } from "./retirement";

export const links: Route.LinksFunction = () => [];

export function loader() {
  throwGone();
}

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

  return (
    <section className="max-w-xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
        {status} {statusText || "Gone"}
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-white">
        Campaign Website Retired
      </h1>
      <p className="mt-4 text-base leading-7 text-neutral-300">
        {retirementMessage}
      </p>
    </section>
  );
}
