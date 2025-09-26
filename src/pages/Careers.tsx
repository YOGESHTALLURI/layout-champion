// src/pages/Careers.tsx
import React, { useMemo, useState } from "react";
import { Mail } from "lucide-react";

/**
 * Careers page with fake listings, search, filters, pagination.
 * - Uses existing utility classes (bg-card, border-border, text-card-foreground, etc).
 * - Clicking "Apply" opens mailto: with subject prefilled.
 */

type Job = {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  team: string;
  posted: string;
  short: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  applyEmail?: string;
};

const FAKE_JOBS: Job[] = [
  {
    id: "jb-001",
    title: "Senior Frontend Engineer (React)",
    location: "United States",
    type: "Full-time",
    team: "Engineering",
    posted: "2025-09-10",
    short: "Build modern React applications and UI components.",
    description:
      "Join our frontend team to design and implement responsive, accessible user experiences using React and TypeScript.",
    responsibilities: [
      "Build reusable, well-tested React components",
      "Collaborate with designers and backend engineers",
      "Drive accessibility and performance improvements",
    ],
    qualifications: [
      "5+ years of frontend experience",
      "Strong React + TypeScript skills",
      "Familiarity with Tailwind CSS (or similar) and testing libraries",
    ],
    applyEmail: "talent@arkinsoftware.com",
  },
  {
    id: "jb-002",
    title: "Cloud DevOps Engineer",
    location: "India",
    type: "Full-time",
    team: "Cloud",
    posted: "2025-09-03",
    short: "Automate deployments and build scalable cloud pipelines.",
    description:
      "Work on IaC, CI/CD pipelines, cloud cost optimization and reliability engineering across AWS/Azure/GCP.",
    responsibilities: [
      "Implement and maintain CI/CD pipelines",
      "Automate infrastructure with Terraform/CloudFormation",
      "Monitor and improve system reliability",
    ],
    qualifications: [
      "3+ years in DevOps or SRE",
      "Experience with Terraform, Docker, Kubernetes",
      "Cloud certifications are a plus",
    ],
    applyEmail: "talent@arkinsoftware.com",
  },
  {
    id: "jb-003",
    title: "Data Analyst",
    location: "Peru",
    type: "Contract",
    team: "Analytics",
    posted: "2025-08-20",
    short: "Analyze datasets and create dashboards for business stakeholders.",
    description:
      "Perform data wrangling and visualization tasks; build dashboards and support analytics projects.",
    responsibilities: [
      "Prepare data models and ETL pipelines",
      "Create dashboards and reports",
      "Communicate insights to stakeholders",
    ],
    qualifications: [
      "2+ years in data analytics",
      "SQL + BI tools (Power BI/Tableau)",
      "Basic Python/R skills",
    ],
    applyEmail: "analytics-hire@arkinsoftware.com",
  },
  {
    id: "jb-004",
    title: "Java Backend Engineer",
    location: "United States",
    type: "Full-time",
    team: "Engineering",
    posted: "2025-09-12",
    short: "Develop microservices and APIs in Java.",
    description:
      "Contribute to backend systems, design APIs and ensure scalable architecture with automated testing.",
    responsibilities: [
      "Design & implement microservices",
      "Write unit/integration tests",
      "Participate in architecture and code reviews",
    ],
    qualifications: [
      "4+ years Java experience",
      "Experience with Spring Boot",
      "Knowledge of Docker & Kubernetes",
    ],
    applyEmail: "talent@arkinsoftware.com",
  },
  {
    id: "jb-005",
    title: "QA Automation Engineer",
    location: "India",
    type: "Full-time",
    team: "QA",
    posted: "2025-09-01",
    short: "Build automated test frameworks to ensure product quality.",
    description:
      "Design automation frameworks, create test plans and collaborate with dev teams to increase release confidence.",
    responsibilities: [
      "Build and maintain automation suites",
      "Write robust E2E and integration tests",
      "Help improve testing processes",
    ],
    qualifications: [
      "Experience with automation (Selenium, Playwright, Cypress)",
      "Familiar with CI/CD and testing best practices",
      "Strong scripting skills (JS/Python)",
    ],
    applyEmail: "qa-hire@arkinsoftware.com",
  },
  {
    id: "jb-006",
    title: "Technical Project Manager",
    location: "Peru",
    type: "Full-time",
    team: "Delivery",
    posted: "2025-08-28",
    short: "Lead delivery of medium/large software projects.",
    description:
      "Coordinate cross-functional teams, manage scoping, timelines, and client communications to ensure successful delivery.",
    responsibilities: [
      "Manage project plans and stakeholders",
      "Drive on-time delivery and risk mitigation",
      "Coordinate with engineering & QA",
    ],
    qualifications: [
      "3+ years managing software projects",
      "PMP/Prince2 or Agile experience",
      "Strong communication skills",
    ],
    applyEmail: "pm-hire@arkinsoftware.com",
  },
  {
    id: "jb-007",
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-time",
    team: "Design",
    posted: "2025-09-14",
    short: "Design beautiful interfaces and conduct user research.",
    description:
      "Partner with product and engineering teams to create intuitive and delightful experiences.",
    responsibilities: [
      "Create wireframes, prototypes and design systems",
      "Run usability studies",
      "Work with engineers to ship designs",
    ],
    qualifications: [
      "2+ years in UI/UX",
      "Experience with Figma or Sketch",
      "Strong visual & interaction design skills",
    ],
    applyEmail: "design-hire@arkinsoftware.com",
  },
];

export default function Careers(): JSX.Element {
  const [query, setQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const locations = useMemo(() => {
    const set = new Set(FAKE_JOBS.map((j) => j.location));
    return ["All", ...Array.from(set)];
  }, []);

  const types = useMemo(() => {
    const set = new Set(FAKE_JOBS.map((j) => j.type));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return FAKE_JOBS.filter((job) => {
      if (locationFilter !== "All" && job.location !== locationFilter) return false;
      if (typeFilter !== "All" && job.type !== typeFilter) return false;
      if (query.trim() === "") return true;
      const q = query.toLowerCase();
      return (
        job.title.toLowerCase().includes(q) ||
        job.short.toLowerCase().includes(q) ||
        job.team.toLowerCase().includes(q)
      );
    });
  }, [query, locationFilter, typeFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageJobs = filtered.slice((page - 1) * pageSize, page * pageSize);

  function toggleExpand(id: string) {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  }

  function applyMailTo(job: Job) {
    const to = job.applyEmail ?? "careers@arkinsoftware.com";
    const subj = encodeURIComponent(`${job.title} - Application`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to apply for the position "${job.title}" (${job.id}).\n\nPlease find my CV attached (or paste link) and let me know the next steps.\n\nRegards,\n[Your name]`
    );

    return `mailto:${to}?subject=${subj}&body=${body}`;
  }

  return (
    <main className="pt-6 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-8 border border-border shadow-sm mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Careers</h1>
          <p className="text-card-foreground mb-4">
            We're always looking for talented people. Browse current openings below and apply — these are
            sample listings for demo purposes.
          </p>

          {/* Search / filters */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
            <div className="flex-1">
              <label className="block text-sm text-muted-foreground mb-1">Search</label>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search by title, team or keyword..."
                className="w-full rounded-md border border-border p-2 bg-input text-card-foreground"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:auto-cols-fr">
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Location</label>
                <select
                  value={locationFilter}
                  onChange={(e) => {
                    setLocationFilter(e.target.value);
                    setPage(1);
                  }}
                  className="rounded-md border border-border p-2 bg-input text-card-foreground w-full"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1">Type</label>
                <select
                  value={typeFilter}
                  onChange={(e) => {
                    setTypeFilter(e.target.value);
                    setPage(1);
                  }}
                  className="rounded-md border border-border p-2 bg-input text-card-foreground w-full"
                >
                  {types.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="space-y-6">
          {pageJobs.length === 0 ? (
            <div className="bg-card rounded-lg p-6 border border-border text-card-foreground">
              No roles found. Try clearing filters or check back later.
            </div>
          ) : (
            pageJobs.map((job) => (
              <article
                key={job.id}
                className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        <span className="mr-3">{job.location}</span>
                        <span className="px-2 py-1 rounded-md bg-slate-50 border border-border text-xs">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="text-sm text-card-foreground mt-2">{job.short}</div>

                    {/* details area */}
                    {expanded[job.id] && (
                      <div className="mt-4 prose text-card-foreground">
                        <p>{job.description}</p>

                        <strong>Responsibilities</strong>
                        <ul>
                          {job.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>

                        <strong>Qualifications</strong>
                        <ul>
                          {job.qualifications.map((q, i) => (
                            <li key={i}>{q}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* right column: actions */}
                  <div className="flex flex-col gap-3 items-start md:items-end">
                    <div className="text-sm text-muted-foreground">Posted: {job.posted}</div>

                    <div className="flex gap-2">
                      <a
                        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 bg-sky-600 text-white btn-primary"
                        href={applyMailTo(job)}
                        onClick={() => {}}
                      >
                        <Mail size={14} /> Apply
                      </a>

                      <button
                        onClick={() => toggleExpand(job.id)}
                        className="rounded-md border border-border px-4 py-2 bg-white text-foreground"
                      >
                        {expanded[job.id] ? "Hide details" : "View details"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {(page - 1) * pageSize + 1} -{" "}
            {Math.min(page * pageSize, filtered.length)} of {filtered.length} roles
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded-md border border-border bg-white text-card-foreground disabled:opacity-50"
            >
              Prev
            </button>
            <div className="text-sm text-muted-foreground">
              Page {page} / {totalPages}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded-md border border-border bg-white text-card-foreground disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
