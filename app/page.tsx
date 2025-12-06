"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/kendricklawton" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kendrick-lawton-257684247/",
  },
  { name: "Twitter", href: "https://x.com/KendrickLawton" },
];

const EXPERIENCE_DATA = [
  {
    company: "Clyde & Co LLP",
    role: "Test Automation Specialist",
    date: "April 2023 — Present",
    description:
      "Contributed to the development of 'Matter Allocation,' an AI-powered legal matter intake system for insurance clients across Aviation, Casualty, Marine, and Healthcare. Implemented full-stack features using .NET 8 and Blazor WebAssembly within a CQRS (MediatR) architecture. Engineered Azure pipelines running 500+ parallelized tests across internal and third-party integrations using Playwright, and established a Promptfoo pipeline for evaluating LLM performance.",
    stack: [
      ".NET",
      "Azure",
      "Azure App Service",
      "Azure Blob Storage",
      "Azure DevOps",
      "Azure Event Grid",
      "Azure Functions",
      "Azure SQL Database",
      "Azure Queues",
      "Blazor WASM",
      "C#",
      "Entity Framework Core",
      "Event Grid",
      "Playwright",
      "Promptfoo",
    ],
  },
];

const PROJECT_DATA = [
  {
    title: "Language Model Books",
    sourceLink: "https://github.com/kendricklawton/language-model-books",
    description:
      "A unified monorepo architecture powering multiple AI-driven platforms. Engineered for scalability and code reuse, it drives distinct AI intelligence tools from a single, cohesive foundation.",
    stack: [
      "GCP",
      "Go",
      "Next.js",
      "Plaid",
      "PostgreSQL",
      "Stripe",
      "TypeScript",
      "Vercel",
      "Workos",
    ],
    liveLinks: [
      { label: "wealthbooklm.com", href: "https://wealthbooklm.com" },
      { label: "betbooklm.com", href: "https://betbooklm.com" },
    ],
  },
];

const EDUCATION_DATA = {
  degree: {
    school: "Arizona State University",
    program: "B.S. Software Engineering",
    year: "December 2022",
  },
  certs: [
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    "Microsoft Certified: Azure Data Fundamentals (DP-900)",
  ],
};

function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-fit font-bold uppercase tracking-wider opacity-50 mb-2 hover:opacity-100 transition-opacity text-left"
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-300">
          {children}
        </div>
      )}
    </div>
  );
}

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:underline hover:opacity-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="text-xs font-medium border border-neutral-300 dark:border-neutral-700 px-2 py-0.5 rounded-full opacity-70">
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-8 px-[4svw] font-(family-name:--font-geist-mono)">
      <header className="flex flex-row items-center justify-between min-h-24 w-full max-w-2xl">
        <h1 className="font-bold text-2xl">Kendrick Lawton</h1>
        <Link href="mailto:khlawton@asu.edu" className="hover:underline">
          Contact
        </Link>
      </header>

      <main className="flex flex-col items-start justify-start max-w-2xl gap-8">
        <p className="leading-relaxed">
          I am a software engineer driven by a love for the craft. There is a
          unique satisfaction in solving complex problems and turning abstract
          ideas into reality through code. For me, programming is more than just
          a career—it is a continuous journey of learning, creating, and
          refining efficient solutions.
        </p>

        <CollapsibleSection title="Experience">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div>
                <div className="flex items-baseline justify-between">
                  <h2 className="font-semibold">{job.company}</h2>
                  <span className="opacity-50">{job.date}</span>
                </div>
                <p className="opacity-50">{job.role}</p>
              </div>

              <p className="leading-relaxed">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="Featured Project">
          {PROJECT_DATA.map((project, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between">
                <h2 className="font-semibold">{project.title}</h2>
                {project.sourceLink && (
                  <Link
                    href={project.sourceLink}
                    className="opacity-50 hover:opacity-100 hover:underline"
                  >
                    Source Code
                  </Link>
                )}
              </div>

              <p className="leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

              {project.liveLinks && project.liveLinks.length > 0 && (
                <div className="flex gap-4 mt-1">
                  {project.liveLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="underline hover:no-underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="Education">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-baseline justify-between">
                <h2 className="font-semibold">
                  {EDUCATION_DATA.degree.school}
                </h2>
                <span className="opacity-50">{EDUCATION_DATA.degree.year}</span>
              </div>
              <p className="opacity-50">{EDUCATION_DATA.degree.program}</p>
            </div>

            <div className="flex flex-col gap-1">
              {EDUCATION_DATA.certs.map((cert) => (
                <span key={cert} className="opacity-80 text-sm">
                  • {cert}
                </span>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-bold uppercase tracking-wider opacity-50 mb-2">
            Social Links
          </h3>
          <div className="flex gap-4 opacity-80">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.name} href={link.href}>
                {link.name}
              </SocialLink>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
