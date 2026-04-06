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
        <h1 className="text-4xl font-bold text-white mb-8">Accessibility Statement for Albers for Congress</h1>

        <div className="prose prose-lg max-w-none text-gray-100 space-y-6">
          <p>
            The Albers for Congress Campaign is committed to ensuring digital accessibility for people with disabilities.
            We are continually improving the user experience for everyone and applying the relevant accessibility standards
            to improve usability for all visitors.
          </p>

          <p>
            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards across the
            Albers for Congress website.
          </p>

          <p>
            Our campaign is actively working to increase the accessibility and usability of our website and periodically
            reviews the site to identify opportunities for improvement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Compatibility with Browsers and Assistive Technology</h2>

          <p>
            The Albers for Congress website is designed to be compatible with commonly used assistive technologies and
            modern web browsers. We aim to support screen readers, keyboard-only navigation, captioned media, and
            responsive layouts across desktop and mobile devices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Feedback and Assistance</h2>

          <p>
            We welcome feedback on the accessibility of the Albers for Congress website. If you experience any
            accessibility barriers or difficulty using any portion of the site, please let us know. When contacting us,
            please include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>the webpage where you encountered the issue</li>
            <li>a description of the issue</li>
            <li>your preferred contact method</li>
          </ul>

          <p>
            We will make reasonable efforts to respond within three business days and provide the information you need
            in an accessible format whenever possible.
          </p>

          <p>
            <strong>You may contact us at:</strong>
          </p>

          <p>
            Mailing Address / Campaign Office:<br/> 201 SE 2nd Ave Suite 208<br/> Gainesville, FL 32601
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ongoing Commitment</h2>

          <p>
            Accessibility is an ongoing effort. As our campaign continues to grow and update its website, we remain
            committed to improving accessibility and ensuring equal access to campaign information for all voters.
          </p>

          <p className="text-sm text-gray-300 mt-8">
            Last updated: April 6, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
