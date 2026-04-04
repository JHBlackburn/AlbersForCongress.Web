import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - Troy Albers for Congress" },
    { name: "description", content: "Get in touch with the Troy Albers for Congress campaign." },
  ];
}

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact</h1>
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
          <p className="text-lg text-gray-700">
            This page is under construction. More content coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
