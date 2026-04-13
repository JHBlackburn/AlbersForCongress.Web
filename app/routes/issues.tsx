import { useState, useEffect, useRef, useMemo } from "react";
import type { Route } from "./+types/issues";
import Fuse from "fuse.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Issues - Troy Albers for Congress" },
    {
      name: "description",
      content: "Troy Albers' positions on national and local issues affecting Florida's 3rd Congressional District."
    },
  ];
}

interface Issue {
  id: string;
  title: string;
  content: string;
}

const nationalIssues: Issue[] = [
  {
    id: "peoples-house",
    title: "The People's House Is in Disrepair",
    content: "Washington has lost sight of the people it is supposed to serve. Costs are up, trust is down, and too many leaders treat accountability like someone else's job. Troy is running because the country needs serious people who will steady the house, fix what is broken, and remember who it belongs to."
  },
  {
    id: "economy",
    title: "Economy",
    content: "Families should not have to work harder every year just to fall further behind. The economy should make it easier to build a life, raise a family, and plan for the future. Troy believes government should focus on lowering the pressure on working people, strengthening opportunity, and rewarding real work instead of accepting a country where basic stability feels out of reach."
  },
  {
    id: "oversight",
    title: "Oversight",
    content: "Power must answer to the people, not operate without serious civilian scrutiny. Civilian oversight is not optional in a healthy republic. Troy believes Congress has a duty to watch the executive branch carefully, uphold its constitutional role, and ensure that military and civilian power remain accountable to the American people."
  },
  {
    id: "insurance-national",
    title: "Insurance",
    content: "Floridians are being crushed by rising insurance costs that government has failed to confront. For many families, insurance is no longer just expensive — it is destabilizing. Troy believes leaders need to treat this like the real economic emergency it is, especially in Florida, where homeowners and working families are paying the price for years of drift and delay."
  },
  {
    id: "healthcare",
    title: "Healthcare",
    content: "Affordable care should be within reach for ordinary Americans, not a constant financial gamble. People should be able to get the care they need without fearing what the bill will do to their household. Troy believes the country needs a more practical, affordable approach to healthcare that puts access, cost, and common sense ahead of bureaucracy and excuses."
  },
  {
    id: "spending",
    title: "Spending",
    content: "The people deserve a government that treats public money with discipline and respect. Reckless spending and weak accountability have damaged trust across multiple administrations and left taxpayers holding the bill. Troy believes Congress should demand real transparency, exercise stronger oversight, and remember that every dollar spent belongs to the people first."
  }
];

const localIssues: Issue[] = [
  {
    id: "florida-practical-fixes",
    title: "Florida Needs Practical Fixes",
    content: "North Central Florida does not need more slogans. It needs representation that looks at real problems in real communities and pushes for practical solutions people can actually see: access to care, lower costs, stronger local infrastructure, support for rural culture, and a government that treats Florida's problems like they matter."
  },
  {
    id: "hospitals",
    title: "Hospitals",
    content: "Rural families deserve faster, more reliable access to emergency care close to home. When hospitals close or scale back, every minute matters more. Troy wants to explore practical infrastructure solutions, including adding helipads to fire stations in key areas, so rural North Central Florida has better emergency access when local care is too far away or unavailable."
  },
  {
    id: "wildlife",
    title: "Wildlife",
    content: "Florida should protect both its natural heritage and the people who travel through it. Wildlife conservation is not just about scenery. It is about safety, stewardship, and building infrastructure that respects the land. Troy wants to support ideas like wildlife crossings in high-conflict areas around Paynes Prairie and similar corridors, helping reduce collisions while protecting the landscapes that make Florida unique."
  },
  {
    id: "fairgrounds",
    title: "Fairgrounds",
    content: "Rural culture deserves real investment, not just applause once a year. County fairgrounds and similar community spaces are part of the civic backbone of small-town Florida. Troy wants to support targeted federal investments that help modernize these spaces, including basic improvements like bathrooms and public facilities, so they can better serve families, events, and local traditions across the district."
  },
  {
    id: "jobs",
    title: "Jobs",
    content: "Florida families need an economy that creates work, lowers pressure, and gives people room to build a life. Too many people feel squeezed between rising prices and limited opportunity. Troy wants to focus on the kind of policies that help North Central Florida grow from the ground up: stronger local employment, support for working families, and a district where economic stability is not reserved for a few ZIP codes."
  },
  {
    id: "insurance-local",
    title: "Insurance",
    content: "Florida needs serious action on insurance costs before more families get priced out of staying put. Insurance is one of the biggest financial pressures facing Florida households. Troy wants to push for a stronger federal role in confronting the crisis, including expanding the mandate of the Federal Insurance Office so it does more than monitor the market and can help bring real accountability to a system that keeps failing consumers."
  }
];

export default function Issues() {
  const [searchQuery, setSearchQuery] = useState("");
  const [nationalExpanded, setNationalExpanded] = useState<Set<string>>(new Set());
  const [localExpanded, setLocalExpanded] = useState<Set<string>>(new Set());
  const nationalSectionRef = useRef<HTMLElement>(null);
  const localSectionRef = useRef<HTMLElement>(null);

  // Configure Fuse.js options for fuzzy search
  const fuseOptions = useMemo(() => ({
    keys: ['title', 'content'], // Search in both title and content
    threshold: 0.4, // 0 = exact match, 1 = match anything (0.4 is good balance)
    ignoreLocation: true, // Don't weight matches by position in string
    minMatchCharLength: 2, // Minimum character length to match
    includeScore: true, // Include match score for potential sorting
  }), []);

  // Create Fuse instances for both issue lists
  const nationalFuse = useMemo(() => new Fuse(nationalIssues, fuseOptions), [fuseOptions]);
  const localFuse = useMemo(() => new Fuse(localIssues, fuseOptions), [fuseOptions]);

  // Handle deep linking on mount and hash changes
  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash === "#national-issues" && nationalSectionRef.current) {
        nationalSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (hash === "#local-issues" && localSectionRef.current) {
        localSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(scrollToSection, 100);

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  // Filter issues using Fuse.js fuzzy search
  const filteredNationalIssues = useMemo(() => {
    if (!searchQuery.trim()) return nationalIssues;
    return nationalFuse.search(searchQuery).map(result => result.item);
  }, [searchQuery, nationalFuse]);

  const filteredLocalIssues = useMemo(() => {
    if (!searchQuery.trim()) return localIssues;
    return localFuse.search(searchQuery).map(result => result.item);
  }, [searchQuery, localFuse]);

  // Toggle individual accordion
  const toggleNationalAccordion = (id: string) => {
    const newExpanded = new Set(nationalExpanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setNationalExpanded(newExpanded);
  };

  const toggleLocalAccordion = (id: string) => {
    const newExpanded = new Set(localExpanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setLocalExpanded(newExpanded);
  };

  // Expand/Collapse all for each section
  const expandAllNational = () => {
    setNationalExpanded(new Set(filteredNationalIssues.map(i => i.id)));
  };

  const collapseAllNational = () => {
    setNationalExpanded(new Set());
  };

  const expandAllLocal = () => {
    setLocalExpanded(new Set(filteredLocalIssues.map(i => i.id)));
  };

  const collapseAllLocal = () => {
    setLocalExpanded(new Set());
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Issues</h1>
        <p className="text-lg text-white mb-8 text-center">
          Troy Albers' positions on the issues that matter most to you and Florida's 3rd Congressional District.
        </p>

        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-40 bg-blue-900/95 backdrop-blur-sm py-4 mb-8 -mx-4 px-4 border-b-2 border-[#FFCC33]">
          <div className="max-w-4xl mx-auto">
            <label htmlFor="issue-search" className="sr-only">
              Search issues
            </label>
            <input
              id="issue-search"
              type="text"
              placeholder="Search issues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-lg text-white placeholder-gray-300 bg-blue-800 border-2 border-blue-700 focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:border-[#FFCC33] transition-all"
              aria-label="Search all issues"
            />
          </div>
        </div>

        {/* National Issues Section */}
        <section
          id="national-issues"
          ref={nationalSectionRef}
          className="mb-12 scroll-mt-24"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">National Issues</h2>
            <div className="flex gap-2">
              <button
                onClick={expandAllNational}
                className="px-3 py-2 text-sm bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Expand all national issues"
              >
                Expand All
              </button>
              <button
                onClick={collapseAllNational}
                className="px-3 py-2 text-sm bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Collapse all national issues"
              >
                Collapse All
              </button>
            </div>
          </div>

          {filteredNationalIssues.length === 0 ? (
            <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
              <p className="text-lg text-gray-700">
                No national issues match your search. Try different keywords.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredNationalIssues.map((issue) => (
                <AccordionItem
                  key={issue.id}
                  issue={issue}
                  isExpanded={nationalExpanded.has(issue.id)}
                  onToggle={() => toggleNationalAccordion(issue.id)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Local Issues Section */}
        <section
          id="local-issues"
          ref={localSectionRef}
          className="scroll-mt-24"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">
              Local Issues
              <span className="block text-xl font-normal mt-1">
                Florida's 3rd Congressional District
              </span>
            </h2>
            <div className="flex gap-2">
              <button
                onClick={expandAllLocal}
                className="px-3 py-2 text-sm bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Expand all local issues"
              >
                Expand All
              </button>
              <button
                onClick={collapseAllLocal}
                className="px-3 py-2 text-sm bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label="Collapse all local issues"
              >
                Collapse All
              </button>
            </div>
          </div>

          {filteredLocalIssues.length === 0 ? (
            <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded">
              <p className="text-lg text-gray-700">
                No local issues match your search. Try different keywords.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLocalIssues.map((issue) => (
                <AccordionItem
                  key={issue.id}
                  issue={issue}
                  isExpanded={localExpanded.has(issue.id)}
                  onToggle={() => toggleLocalAccordion(issue.id)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// Accordion Item Component
interface AccordionItemProps {
  issue: Issue;
  isExpanded: boolean;
  onToggle: () => void;
}

function AccordionItem({ issue, isExpanded, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="bg-blue-50 border-l-4 border-blue-900 rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
        aria-expanded={isExpanded}
        aria-controls={`content-${issue.id}`}
      >
        <h3 className="text-xl font-bold text-blue-900 pr-4">{issue.title}</h3>
        <svg
          className={`w-6 h-6 text-blue-900 flex-shrink-0 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`content-${issue.id}`}
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        aria-hidden={!isExpanded}
      >
        <div className="px-6 pb-6 pt-2">
          <p className="text-lg text-gray-700 leading-relaxed">{issue.content}</p>
        </div>
      </div>
    </div>
  );
}
