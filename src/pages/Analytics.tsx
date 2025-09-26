// src/pages/Analytics.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

import visImage from "@/assets/analytics-visualization.png";
import biImage from "@/assets/analytics-bi.png";
import bigDataImage from "@/assets/analytics-bigdata.png";
import nextGenImage from "@/assets/analytics-nextgen.png";

/* optional small icons for the Data Frameworks list — if you have them */
import iconDataIntegration from "@/assets/icon-data-integration.png";
import iconMetadata from "@/assets/icon-metadata.png";
import iconMasterData from "@/assets/icon-master-data.png";
import iconArchitecture from "@/assets/icon-architecture.png";
import iconGovernance from "@/assets/icon-governance.png";
import iconQuality from "@/assets/icon-quality.png";
import iconSecurity from "@/assets/icon-security.png";

export default function AnalyticsPage(): JSX.Element {
  const frameworks = [
    { id: "df1", title: "Data Integration", icon: iconDataIntegration },
    { id: "df2", title: "Metadata Management", icon: iconMetadata },
    { id: "df3", title: "Master Data Management", icon: iconMasterData },
    { id: "df4", title: "Data Architecture Assessment", icon: iconArchitecture },
    { id: "df5", title: "Data Governance", icon: iconGovernance },
    { id: "df6", title: "Data Quality Management", icon: iconQuality },
    { id: "df7", title: "Data Security", icon: iconSecurity },
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
          Analytics
        </h1>

        {/* Intro */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="space-y-4">
            <p className="text-body-md text-card-foreground">
              Arkin Software helps enterprises unify operational, analytical, and
              transactional data to create trusted, governed information that
              supports decision-making, insights and modern digital experiences.
            </p>

            <p className="text-body-md text-card-foreground">
              We combine domain expertise, modern data engineering and analytics
              platforms to help organizations make sense of their data and act
              on it with confidence.
            </p>
          </div>
        </section>

        {/* Data Frameworks */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Data Frameworks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* left: description */}
            <div className="prose max-w-none text-card-foreground">
              <p>
                We enable enterprises to adopt a repeatable analytics platform by
                building robust data frameworks — from ingestion and integration
                to governance and secure delivery of analytics.
              </p>
              <p>
                Our frameworks are designed to handle scale, lineage, and
                operationalization so analytics deliver reliable business value.
              </p>
            </div>

            {/* right: list of capabilities (icons + labels) */}
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {frameworks.map((f) => (
                  <li key={f.id} className="flex items-start gap-3 bg-card rounded-lg border border-border p-3">
                    <div className="w-12 h-12 rounded-md bg-sky-50 flex items-center justify-center">
                      {f.icon ? (
                        <img src={f.icon} alt={f.title} className="w-7 h-7 object-contain" />
                      ) : (
                        <div className="w-5 h-5 bg-slate-300 rounded" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{f.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Data Visualization */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Data Visualization</h3>
              <p className="text-body-md text-card-foreground">
                We design meaningful visualizations that surface insights, trends,
                and anomalies for business users. Our dashboards and data apps
                are optimized for clarity and action.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <img src={visImage} alt="Data visualization illustration" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Business Intelligence */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Business Intelligence</h3>
              <p className="text-body-md text-card-foreground">
                We provide automated reporting, self-service analytics and curated
                semantic layers so business users can get timely answers and make
                data-driven decisions.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <img src={biImage} alt="Business intelligence illustration" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Big Data */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Big Data</h3>
              <p className="text-body-md text-card-foreground">
                We help organizations process and analyze large scale data sets
                using modern big data platforms, streaming, and batch processing
                architectures so you can build advanced analytics and ML models.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <img src={bigDataImage} alt="Big data illustration" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Next-Gen Analytics */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Next-Gen Analytics</h3>
              <p className="text-body-md text-card-foreground">
                We build AI-ready analytics platforms and pipelines to enable
                predictive analytics, anomaly detection and machine-learning driven
                insights that unlock business value at scale.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <img src={nextGenImage} alt="Next gen analytics illustration" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Talk to our Analytics team</h3>
              <p className="text-body-md text-card-foreground mb-4">
                If you want to move from data to insight, contact us for a discovery workshop and a migration roadmap.
              </p>

              <div className="space-y-2 text-sm text-card-foreground">
                <div><strong>Address</strong><br />44330 Premier Plaza Suite #100, Ashburn, Virginia, 20147</div>
                <div className="mt-2"><strong>Email</strong><br /><a href="mailto:info@arkinsoftware.com" className="text-sky-600">info@arkinsoftware.com</a></div>
                <div className="mt-2"><strong>Phone</strong><br />+1 703 297 8730</div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-sky-600 text-white px-5 py-3 text-sm hover:brightness-95">
                Contact Us <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
