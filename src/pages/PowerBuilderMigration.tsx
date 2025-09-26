// src/pages/PowerBuilderMigration.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/*
  PowerBuilder migration page
  - No global CSS changes; uses existing design tokens/classes (bg-card, border-border, text-card-foreground, etc).
  - Images expected in src/assets/ — listed below.
*/

import roundIllust from "@/assets/powerbuilder-round.jpg"; // round illustrative image below the heading
import modernToolsImg from "@/assets/powerbuilder-tools.png"; // image for tools section
import icon1 from "@/assets/icon-automation.png";
import icon2 from "@/assets/icon-architecture.png";
import icon3 from "@/assets/icon-migrate.png";
import icon4 from "@/assets/icon-value.png";
import icon5 from "@/assets/icon-turnkey.png";
import icon6 from "@/assets/icon-augmentation.png";
import icon7 from "@/assets/icon-toolsonly.png";
import icon8 from "@/assets/icon-rescue.png";

export default function PowerBuilderMigration(): JSX.Element {
  const tabs = [
    { id: "powerbuilder", label: "PowerBuilder" },
    { id: "forte", label: "Forte" },
    { id: "oracleforms", label: "Oracle Forms" },
    { id: "proC", label: "ProC" },
    { id: "informix", label: "Informix 4GL" },
    { id: "unibasic", label: "Unibasic" },
    { id: "vb", label: "Visual Basic" },
    { id: "vfp", label: "Visual FoxPro" },
  ];

  const migrationList = [
    "PowerBuilder to Java / JEE",
    "PowerBuilder Modernization: UI modernization, business logic refactor, data layer modernization",
    "Automated and manual testing to ensure parity",
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* heading row */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              PowerBuilder Migration
            </h1>

            <div className="bg-card rounded-lg border border-border p-4 md:p-6 shadow-sm max-w-3xl">
              <p className="text-body-md text-card-foreground mb-3">
                High-confidence migration for PowerBuilder applications — automated and manual conversion options to Java / JEE or modern stacks.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-card-foreground">
                {migrationList.map((t, i) => (
                  <li key={i} className="text-body-md">{t}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* right illustration (optional, small) */}
          <div className="hidden md:flex items-start justify-end">
            <div className="w-64 rounded-lg overflow-hidden border border-border bg-card shadow-sm">
              <img src={roundIllust} alt="PowerBuilder illustration" className="w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Tabs (platforms) */}
        <nav className="flex flex-wrap gap-3 items-center">
          {tabs.map((t) => (
            <Link
              key={t.id}
              to={`#${t.id}`}
              className={`text-sm px-3 py-2 rounded-md border border-transparent hover:border-border ${
                t.id === "powerbuilder" ? "bg-sky-50 text-sky-600 font-semibold" : "text-muted-foreground"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {/* Content sections */}
        <section className="space-y-8">
          {/* PowerBuilder overview */}
          <article id="powerbuilder" className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">PowerBuilder Migration</h2>

            <div className="prose max-w-none text-card-foreground">
              <p>
                PowerBuilder to Java / JEE migration provides a high-fidelity modernization path:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Code conversion and component mapping (automated + manual remediation)</li>
                <li>UI modernization using modern web frameworks</li>
                <li>Business logic rearchitecture and packaging to microservices (optional)</li>
                <li>Data layer modernization and automated SQL transformation</li>
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">PowerBuilder to Java Migration</h3>
                <p className="text-body-md text-card-foreground mb-3">
                  We convert PowerBuilder business logic, data access code, and presentation layers to Java / JEE equivalents, preserving behavior and improving maintainability.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-card-foreground">
                  <li>UI re-mapping to modern JS frameworks (React/Vue)</li>
                  <li>Data access translation (embedded SQL → ORM)</li>
                  <li>Automated test scaffolding and regression validation</li>
                </ul>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border shadow-sm bg-card">
                  <img src={modernToolsImg} alt="PowerBuilder tools" className="w-full h-auto object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </article>

          {/* 100% Modernization */}
          <article className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">100% Modernization</h3>
            <p className="text-body-md text-card-foreground mb-3">
              Our modernization approach includes full code conversion, UI renewal, automated test frameworks, packaging for cloud-native deployment, and optional microservices refactor. We ensure parity and operational readiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Key features</h4>
                <ul className="list-disc pl-5 text-card-foreground space-y-2">
                  <li>Automated conversion pipeline + manual remediation</li>
                  <li>CI/CD integration & test automation</li>
                  <li>Cloud packaging & containerization</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Migrate as-you-need</h4>
                <p className="text-card-foreground">
                  We support phased migration: UI-first, backend refactor, database migration, or quick rehosting depending on your risk profile.
                </p>
              </div>
            </div>
          </article>

          {/* Tools / Icons list */}
          <article className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">PowerBuilder Migration Tools</h3>
            <p className="text-body-md text-card-foreground mb-4">
              We provide an integrated set of tools to analyze, convert, validate and package PowerBuilder applications.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[icon1, icon2, icon3, icon4].map((ic, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-3 bg-card rounded-lg border border-border shadow-sm">
                  <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-md bg-sky-50">
                    <img src={ic} alt={`icon-${idx}`} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {["Automation", "Arch. Consistent", "Migration", "Value"][idx]}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Engagement Models (icons + text) */}
          <article className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4">Engagement Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: icon5, title: "Turnkey" },
                { icon: icon6, title: "Staff Augmentation" },
                { icon: icon7, title: "Tools-only" },
                { icon: icon8, title: "Modernize Rescue Squad" },
              ].map((e, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-3">
                    <img src={e.icon} alt={e.title} className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">{e.title}</div>
                </div>
              ))}
            </div>
          </article>

          {/* Contact / footer CTA */}
          <article className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Start your PowerBuilder modernization</h4>
                <p className="text-card-foreground mb-3">Contact our team for a discovery workshop and modernization assessment.</p>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-sky-600 text-white px-4 py-2">
                  Contact Us <ArrowRight size={14} />
                </a>
              </div>

              <div className="text-sm text-card-foreground">
                <div><strong>Address</strong><br />44330 Premier Plaza Suite #100, Ashburn, Virginia, 20147</div>
                <div className="mt-2"><strong>Email</strong><br /><a href="mailto:info@arkinsoftware.com" className="text-sky-600">info@arkinsoftware.com</a></div>
                <div className="mt-2"><strong>Phone</strong><br />+1 703 297 8730</div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
