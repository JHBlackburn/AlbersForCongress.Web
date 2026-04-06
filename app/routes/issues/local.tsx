import type { Route } from "./+types/local";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Local Issues - Troy Albers for Congress" },
    { name: "description", content: "Troy Albers' positions on local issues in Florida's 3rd District." },
  ];
}

export default function IssuesLocal() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Local Issues</h1>
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <p className="text-lg text-gray-700">
            This page is under construction. More content coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
