import type { Route } from "./+types/accessibility-statement";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accessibility Statement - Troy Albers for Congress" },
    { name: "description", content: "Accessibility statement for Troy Albers for Congress website." },
  ];
}

export default function AccessibilityStatement() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">Accessibility Statement</h1>
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <p className="text-lg text-gray-700 mb-4">
            The Troy Albers for Congress campaign is committed to ensuring digital accessibility for people with disabilities.
          </p>
          <p className="text-lg text-gray-700">
            This page is under construction. More content coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
