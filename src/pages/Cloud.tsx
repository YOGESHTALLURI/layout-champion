// src/pages/Cloud.tsx
import React from "react";
import { ArrowRight } from "lucide-react";

import cloudIcon1 from "@/assets/cloud-icon-1.png";
import cloudIcon2 from "@/assets/cloud-icon-2.png";
import cloudIcon3 from "@/assets/cloud-icon-3.png";
import cloudAccel from "@/assets/cloud-acceleration.png";
import eng1 from "@/assets/cloud-engagement-1.png";
import eng2 from "@/assets/cloud-engagement-2.png";
import eng3 from "@/assets/cloud-engagement-3.png";
import eng4 from "@/assets/cloud-engagement-4.png";

export default function CloudPage(): JSX.Element {
  const introBullets = [
    "From assessment to planning, through rehosting to cloud-native modernization",
    "We help you take advantage of the scalability and flexibility of the cloud",
    "We provide strategic support along with management & technical consulting",
  ];

  const cloudServices = [
    {
      id: "c1",
      title: "Cloud Consulting",
      text: "We deliver strategic cloud roadmaps, ROI and TCO models to help you prioritize cloud initiatives.",
      image: cloudIcon1,
    },
    {
      id: "c2",
      title: "Technical Implementation Services",
      text: "We develop and operate technical reference architectures and turnkey implementations to accelerate your cloud journey.",
      image: cloudIcon2,
    },
    {
      id: "c3",
      title: "Methodology",
      text: "Each migration follows detailed design templates and checklists to ensure security and reliability in the cloud.",
      image: cloudIcon3,
    },
  ];

  const engagementModels = [
    { id: "e1", title: "Turnkey", text: "We deliver an end-to-end managed project engagement and full delivery.", image: eng1 },
    { id: "e2", title: "Staff Augmentation", text: "Add experienced cloud engineers to your team for short or long term needs.", image: eng2 },
    { id: "e3", title: "Tools-only", text: "You prefer to run migrations in-house — we provide the tooling & runbooks.", image: eng3 },
    { id: "e4", title: "Modernize Rescue Squad", text: "We work as an on-demand SWAT team to get stalled cloud projects back on track.", image: eng4 },
  ];

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
          Cloud Computing
        </h1>

        {/* Intro bullets */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <ul className="list-disc pl-5 space-y-2 text-card-foreground">
            {introBullets.map((b, i) => (
              <li key={i} className="text-body-md">{b}</li>
            ))}
          </ul>
        </section>

        {/* Cloud Services */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Cloud Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cloudServices.map((s) => (
              <article key={s.id} className="bg-card rounded-xl border border-border shadow-sm p-5 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-lg bg-sky-50 flex items-center justify-center mb-4">
                  <img src={s.image} alt={s.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-body-md text-card-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Acceleration Kit */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Acceleration Kit
              </h2>
              <p className="text-body-md text-card-foreground">
                A compact set of tools & templates to accelerate migration to the public cloud. Includes migration playbooks, Cloud Transformation templates, automation scripts and ready cloud images to jump start adoption.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-xs rounded-lg overflow-hidden border border-border bg-card shadow-sm">
                <img src={cloudAccel} alt="Acceleration kit" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {engagementModels.map((e) => (
              <div key={e.id} className="bg-card rounded-xl border border-border p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-sky-50 flex items-center justify-center mb-4">
                  <img src={e.image} alt={e.title} className="w-10 h-10 object-contain" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{e.title}</h4>
                <p className="text-sm text-card-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Get started with Cloud
              </h3>
              <p className="text-body-md text-card-foreground mb-4">
                Ready to accelerate your cloud journey? Contact us for a free consultation and migration readiness assessment.
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
