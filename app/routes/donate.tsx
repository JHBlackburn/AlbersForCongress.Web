import type { Route } from "./+types/donate";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Donate - Troy Albers for Congress" },
    { name: "description", content: "Support Troy Albers for Congress with a donation." },
  ];
}

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Donate</h1>
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <p className="text-lg text-gray-700">
            This page is under construction. More content coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
