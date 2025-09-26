


// // database image
//  // add your verification image here

// // src/pages/Migration.tsx
// import React from "react";
// import migrationillustration from "@/assets/migration-illustration.jpg"
// import dbMigrationImage from "@/assets/database-migration.jpg"; 
// import verificationImage from "@/assets/verification.png";

// export default function MigrationPage(): JSX.Element {
//   const introItems = [
//     {
//       id: "i1",
//       num: "01.",
//       text: "Arkin’s Migration Framework is a modular set of automated tools",
//     },
//     {
//       id: "i2",
//       num: "02.",
//       text: "Process templates for modernizing applications (4GL or 3GL) to web/mobile architecture",
//     },
//     {
//       id: "i3",
//       num: "03.",
//       text: "Migrating RDBMS systems from one to the other",
//     },
//     {
//       id: "i4",
//       num: "04.",
//       text: "We offer complete transformation solution powered by automation and speedy execution. We guarantee success, always",
//     },
//   ];

//   const appMigrationList = [
//     "PowerBuilder to Java / JEE",
//     "Oracle-Forms to Java / JEE",
//     "Informix 4GL to Java / JEE",
//     "Unibasic to Java / JEE",
//     "Visual FoxPro to Java / JEE",
//     "Forte to Java / JEE",
//     "ProC to Java / JEE",
//     "Cobol to Java / JEE",
//     "Visual Basic to Java / JEE",
//   ];

//   const dbMigrationList = [
//     "Informix → Oracle, SQL Server, MySQL, PostgreSQL",
//     "Sybase → Oracle, SQL Server, MySQL, PostgreSQL",
//     "PostgreSQL → Oracle, SQL Server, MySQL",
//     "MySQL → Oracle, SQL Server, PostgreSQL",
//     "DB2 → Oracle, SQL Server, MySQL, PostgreSQL",
//     "SQL Server → Oracle, MySQL",
//     "Unidata → Oracle, SQL Server, MySQL, PostgreSQL",
//     "Oracle → SQL Server, MySQL, PostgreSQL",
//   ];

//   return (
//     <main className="py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
//         {/* Page heading */}
//         <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
//           Migration Tools
//         </h1>

//         {/* Intro two-column: numbered cards (left) + image (right) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* left: numbered cards */}
//           <div className="space-y-4">
//             {introItems.map((it) => (
//               <div
//                 key={it.id}
//                 className="flex items-start gap-4 bg-card rounded-xl border border-border p-4 md:p-6 shadow-sm"
//               >
//                 <div className="min-w-[56px] flex items-center justify-center">
//                   <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sky-600 font-semibold">
//                     {it.num.replace(".", "")}
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <p className="text-body-md text-card-foreground">{it.text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* right: illustration */}
//           <div className="flex justify-center md:justify-end">
//             <div className="w-full max-w-md rounded-xl overflow-hidden border border-border bg-card shadow-sm">
//               <img
//                 src={migrationillustration}
//                 alt="Migration illustration"
//                 className="w-full h-auto object-cover block"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Application Migration card */}
//         <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
//           <h2 className="text-2xl font-semibold text-foreground mb-4">
//             Application Migration
//           </h2>

//           <div className="prose max-w-none text-card-foreground">
//             <p>
//               Several automation tools – like legacy code analyzers, code
//               converters, GUI translators, and traceability matrix – make up our
//               migration. Arkin engages all through the migration – from the
//               initial assessment to business logic conversion, deployment on the
//               cloud to mobile enablement.
//             </p>

//             <p>
//               The list of legacy environments we can help migrate from is always
//               growing. Please contact us, even if your need is outside of the
//               list here. The chances are we could still assist you.
//             </p>

//             <ul className="list-disc pl-6 mt-4">
//               {appMigrationList.map((m, i) => (
//                 <li key={i} className="text-body-md text-card-foreground">
//                   {m}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* Database Migration card - text left, image right on desktop */}
//         <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//             <div>
//               <h3 className="text-2xl font-semibold text-foreground mb-4">
//                 Database Migration
//               </h3>

//               <div className="prose max-w-none text-card-foreground">
//                 <p>
//                   Using a set of automated tools, our database migration is a
//                   complete solution covering data, schema, stored procedures,
//                   functions, views, triggers, indices, and reports. Arkin extends
//                   offerings at the application level too – redirecting and
//                   remediating. The list of source and target environments is
//                   always growing. Please do contact us, even if your need is
//                   outside of the list here. The chances are we could still
//                   assist you.
//                 </p>

//                 <ul className="list-disc pl-6 mt-4">
//                   {dbMigrationList.map((m, i) => (
//                     <li key={i} className="text-body-md text-card-foreground">
//                       {m}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm">
//                 <img
//                   src={dbMigrationImage}
//                   alt="Database migration illustration"
//                   className="w-full h-auto object-cover block"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Verification card */}
//         <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
//             <div>
//               <h3 className="text-2xl font-semibold text-foreground mb-4">
//                 Verification
//               </h3>

//               <div className="prose max-w-none text-card-foreground">
//                 <p>
//                   Several automation tools – like legacy code analyzers, code
//                   converters, GUI translators, and traceability matrix – make up
//                   our migration. Arkin engages all through the migration – from
//                   the initial assessment to business logic conversion, deployment
//                   on the cloud to mobile enablement.
//                 </p>

//                 <p>
//                   In the case of Database Migration, several automation tools –
//                   like Schema analyzer, migration, data migration,
//                   procedures/packages/views/triggers, data verification,
//                   procedures dependency analysis, Procedures test execution –
//                   make up our database migration. Arkin engages all through the
//                   database migration – from the initial assessment to metadata
//                   conversion, data migration, and deployment.
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center md:justify-end">
//               <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm">
//                 <img
//                   src={verificationImage}
//                   alt="Verification illustration"
//                   className="w-full h-auto object-cover block"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


// src/pages/Migration.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Accordion from "@/components/Accordion";
import migrationillustration from "@/assets/migration-illustration.jpg"
import dbMigrationImage from "@/assets/database-migration.jpg"; 
import verificationImage from "@/assets/verification.png";

const introItems = [
  {
    id: "i1",
    num: "01",
    text: "Arkin’s Migration Framework is a modular set of automated tools",
  },
  {
    id: "i2",
    num: "02",
    text: "Process templates for modernizing applications (4GL or 3GL) to web/mobile architecture",
  },
  {
    id: "i3",
    num: "03",
    text: "Migrating RDBMS systems from one to the other",
  },
  {
    id: "i4",
    num: "04",
    text: "We offer complete transformation solution powered by automation and speedy execution. We guarantee success, always",
  },
];

const appMigrationList = [
  "PowerBuilder to Java / JEE",
  "Oracle-Forms to Java / JEE",
  "Informix 4GL to Java / JEE",
  "Unibasic to Java / JEE",
  "Visual FoxPro to Java / JEE",
  "Forte to Java / JEE",
  "ProC to Java / JEE",
  "Cobol to Java / JEE",
  "Visual Basic to Java / JEE",
];

const dbMigrationList = [
  "Informix → Oracle, SQL Server, MySQL, PostgreSQL",
  "Sybase → Oracle, SQL Server, MySQL, PostgreSQL",
  "PostgreSQL → Oracle, SQL Server, MySQL",
  "MySQL → Oracle, SQL Server, PostgreSQL",
  "DB2 → Oracle, SQL Server, MySQL, PostgreSQL",
  "SQL Server → Oracle, MySQL",
  "Unidata → Oracle, SQL Server, MySQL, PostgreSQL",
  "Oracle → SQL Server, MySQL, PostgreSQL",
];

export default function MigrationPage(): JSX.Element {
  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Title + quick CTA row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Migration Tools</h1>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-sky-600 text-white px-4 py-2 text-sm hover:brightness-95">
            Contact Us <ArrowRight size={14} />
          </a>
        </div>

        {/* Intro two-column: numbered list left + illustration right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {introItems.map((it) => (
              <article
                key={it.id}
                className="flex items-start gap-4 p-4 md:p-5 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-semibold">
                    {it.num}
                  </div>
                </div>
                <div>
                  <p className="text-body-md text-card-foreground">{it.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-xl overflow-hidden border border-border bg-card shadow">
              {/* decorative SVG subtle shape behind the image */}
              <div className="relative">
                <svg className="absolute -left-6 -top-6 opacity-10" width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden>
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0" stopColor="#e6f4ff" />
                      <stop offset="1" stopColor="#eef2ff" />
                    </linearGradient>
                  </defs>
                  <circle cx="80" cy="80" r="70" fill="url(#g)"></circle>
                </svg>

                <img
                  src={migrationillustration}
                  alt="Migration illustration"
                  className="w-full h-auto object-cover block relative"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Application Migration card with accordion for lists */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Application Migration</h2>
          <p className="text-body-md text-card-foreground mb-4">
            Several automation tools – like legacy code analyzers, code converters, GUI translators, and traceability matrix – make up our migration. Arkin engages all through the migration – from the initial assessment to business logic conversion, deployment on the cloud to mobile enablement.
          </p>

          <Accordion title="Supported migrations & examples (click to expand)" defaultOpen={false}>
            <ul className="list-disc pl-5 space-y-2">
              {appMigrationList.map((it, idx) => (
                <li key={idx} className="text-body-md text-card-foreground">{it}</li>
              ))}
            </ul>
          </Accordion>
        </section>

        {/* Database Migration card - two-column inside */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Database Migration</h3>
              <p className="text-body-md text-card-foreground mb-4">
                Using a set of automated tools, our database migration is a complete solution covering data, schema, stored procedures, functions, views, triggers, indices, and reports. Arkin extends offerings at the application level too – redirecting and remediating.
              </p>

              <Accordion title="Supported source → target mappings" defaultOpen={false}>
                <ul className="list-disc pl-5 space-y-2">
                  {dbMigrationList.map((it, idx) => (
                    <li key={idx} className="text-body-md text-card-foreground">{it}</li>
                  ))}
                </ul>
              </Accordion>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm transform transition-transform hover:-translate-y-1">
                <img src={dbMigrationImage} alt="Database migration" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Verification card */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Verification</h3>
              <p className="text-body-md text-card-foreground mb-3">
                Several automation tools – like legacy code analyzers, code converters, GUI translators, and traceability matrix – make up our migration. Arkin engages all through the migration – from the initial assessment to business logic conversion, deployment on the cloud to mobile enablement.
              </p>

              <p className="text-body-md text-card-foreground">
                In the case of Database Migration, several automation tools – like Schema analyzer, migration, data migration, procedures/packages/views/triggers, data verification, procedures dependency analysis, Procedures test execution – make up our database migration. Arkin engages all through the database migration – from the initial assessment to metadata conversion, data migration, and deployment.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm transform transition-transform hover:-translate-y-1">
                <img src={verificationImage} alt="Verification" className="w-full h-auto object-cover block" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
