// src/pages/Corporate.tsx
import React from "react";

/* logos (you already imported these earlier) */
import onebeacon from "@/assets/logos/onebeacon.jpg";
import liberty from "@/assets/logos/liberty-mutual.jpg";
import cevaldom from "@/assets/logos/cevaldom.jpg";
import unitedhealthcare from "@/assets/logos/unitedhealthcare.jpg";
import sunat from "@/assets/logos/sunat.jpg";
import cavali from "@/assets/logos/cavali.jpg";
import psybergate from "@/assets/logos/psybergate.jpg";
import hbo from "@/assets/logos/hbo.jpg";
import arcelormittal from "@/assets/logos/arcelormittal.jpg";
import bcdd from "@/assets/logos/bcdd.jpg";
import cuesportz from "@/assets/logos/cuesportz.jpg";
import sanbernando from "@/assets/logos/sanbernando.jpg";
import bdlr from "@/assets/logos/bdlr.jpg";
import interseguro from "@/assets/logos/interseguro.jpg";
import rvrd from "@/assets/logos/rvrd.jpg";
import bbdv from "@/assets/logos/bbdv.jpg";
import hsbc from "@/assets/logos/hsbc.jpg";

/* mission/vision images — add these to src/assets/ */
import imgMission from "@/assets/our-mission.jpg";
import imgPhilosophy from "@/assets/our-philosophy.jpg";
import imgVision from "@/assets/our-vision.jpg";
import imgStrategy from "@/assets/our-strategy.jpg";

export default function Corporate(): JSX.Element {
  const clientLogos = [
    onebeacon,
    liberty,
    cevaldom,
    unitedhealthcare,
    sunat,
    cavali,
    psybergate,
    hbo,
    arcelormittal,
    bcdd,
    cuesportz,
    sanbernando,
    bdlr,
    interseguro,
    rvrd,
    bbdv,
    hsbc,
  ];

  const marqueeLogos = [...clientLogos, ...clientLogos];

  const cards = [
    { title: "Our Mission", img: imgMission },
    { title: "Our Philosophy", img: imgPhilosophy },
    { title: "Our Vision", img: imgVision },
    { title: "Our Strategy", img: imgStrategy },
  ];

  return (
    <main className="pt-6">
      {/* subtle banner */}
      <div className="w-full">
        <div
          className="w-full h-36 md:h-44 lg:h-56 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-b-md"
          aria-hidden
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
       {/* top card */}
<div className="bg-white rounded-lg shadow-sm p-10 border border-border">
  <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
    Corporate
  </h1>

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    {/* left: about + cards */}
    <div className="lg:col-span-8 space-y-8">
      <h2 className="text-lg font-semibold text-foreground">ABOUT COMPANY</h2>

      <div className="prose text-card-foreground max-w-none">
        <p><strong>CMMi Level 3 appraised</strong></p>
        <ul>
          <li>Providing mission critical solutions since 2004</li>
          <li>Serving clients in North America, South America, Europe, Japan, Australia and South Africa</li>
          <li>Mature provider of niche solutions with innovative tools and methodologies</li>
          <li>Accelerated & flexible delivery models for best value</li>
        </ul>
      </div>

      {/* image cards - centered & larger */}
     {/* image cards (center as a group using flex) */}
{/* <div className="mt-4">
  <div className="flex flex-wrap justify-center lg:justify-start gap-6">
    {cards.map((c) => (
      <div
        key={c.title}
        className="w-56 bg-slate-50 rounded-lg shadow-sm border border-border overflow-hidden flex flex-col"
      >
        <div className="h-40 w-full overflow-hidden">
          <img
            src={c.img}
            alt={c.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-3 text-center">
          <div className="text-sm font-semibold text-foreground">{c.title}</div>
        </div>
      </div>
    ))}
  </div>
</div> */}

    </div>

    {/* right: corporate HQ card */}
    <div className="lg:col-span-4">
      <div className="bg-card rounded-lg border border-border p-6 shadow-sm h-full flex items-center justify-center">
        <div className="text-card-foreground text-sm text-center">
          <strong>Corporate HQ</strong>
          <p className="mt-2 text-sm">
            Arkin Software Technologies — Global delivery and consulting teams.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Marquee logos block */}
        <div className="mt-10">
          <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
            <div className="text-sm text-muted-foreground mb-4">Trusted by</div>

            {/* use the corp-marquee markup (CSS already in index.css) */}
            <div className="corp-marquee" aria-hidden>
              <div className="corp-marquee__track">
                {marqueeLogos.map((logo, i) => (
                  <div key={`logo-${i}`} className="corp-marquee__item inline-block mx-6">
                    <img src={logo} alt={`client-${i}`} loading="lazy" />
                  </div>
                ))}
              </div>

              <div className="corp-marquee__track--dup" aria-hidden>
                {marqueeLogos.map((logo, i) => (
                  <div key={`logo2-${i}`} className="corp-marquee__item inline-block mx-6">
                    <img src={logo} alt={`client-dup-${i}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience + Contact Offices */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Experience. Execution. Excellence.</h2>
              <p className="text-card-foreground">
                Customers of Arkin Software Technologies have come to depend on the diversity of our technology expertise,
                flexible delivery models, state-of-the-art infrastructure, accelerated project deliveries and for the experience
                garnered from working with industry majors worldwide.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg p-6 border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">Contact Offices</h4>

              <div className="space-y-4 text-card-foreground text-sm">
                <div>
                  <strong>United States</strong><br />
                  Arkin Software Technologies, Inc.<br />
                  161 Fort Evans Rd NE,<br />
                  Suite 235, Leesburg, Virginia 20176<br />
                  Tel: +1 703 297 8730<br />
                  <a href="mailto:info@arkinsoftware.com" className="text-sky-600">info@arkinsoftware.com</a>
                </div>

                <div>
                  <strong>Peru</strong><br />
                  Arkin Software Technologies S.R.C.L.<br />
                  Calle 6 de Agosto 745,<br />
                  Oficina 201, Jesús María, Lima, PERU<br />
                  Tel: +51 1 000 0000 (replace with correct local) <br />
                  <a href="mailto:info@arkinsoftware.com" className="text-sky-600">info@arkinsoftware.com</a>
                </div>

                <div>
                  <strong>India</strong><br />
                  Arkin Software Technologies Pvt Ltd.<br />
                  Plot No 15, HACP Colony, Karkhana,<br />
                  Secunderabad, Telangana 500009<br />
                  Tel: +91-40-4859-5978<br />
                  <a href="mailto:info@arkinsoftware.com" className="text-sky-600">info@arkinsoftware.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small footer address card */}
        <div className="mt-12 mb-24">
          <div className="bg-card rounded-lg border border-border p-6 shadow-sm text-card-foreground">
            <p className="text-sm">
              <strong>Head Office</strong><br />
              44330 Premier Plaza, Suite #100, Ashburn, Virginia, 20147
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
