// src/pages/Services.tsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * Services index page — contains:
 *  - Application Migration (id="app-migration")
 *  - Database Migration (id="db-migration")
 *  - Dev & Deploy (id="dev")
 *  - Platform anchors (powerbuilder, forte, oracleforms, proc, informix4gl, cobol, unibasic, visualbasic, visualfoxpro)
 *
 * Make sure header links point to /services#app-migration, /services#db-migration, /services#powerbuilder etc.
 */

export default function ServicesPage(): JSX.Element {
  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Services</h1>

        {/* Application Migration summary */}
        <section id="app-migration" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Application Migration</h2>
          <p className="text-body-md text-card-foreground mb-3">
            Several automation tools — code analyzers, converters, GUI translators and traceability matrices — make up our migration toolkit. Arkin engages across the migration lifecycle: assessment, conversion, testing and go-live.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="list-disc pl-5 text-card-foreground space-y-2">
                <li>PowerBuilder to Java / JEE</li>
                <li>Oracle Forms to Java / JEE</li>
                <li>Informix 4GL to Java / JEE</li>
                <li>Visual FoxPro to Java / JEE</li>
                <li>Cobol to Java / JEE</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              {/* Placeholder image; replace with actual asset if available */}
              <div className="w-full max-w-sm rounded-lg overflow-hidden border border-border bg-card shadow-sm p-6 text-center">
                <div className="text-card-foreground">[Illustration or image here]</div>
              </div>
            </div>
          </div>
        </section>

        {/* Database Migration summary */}
        <section id="db-migration" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Database Migration</h2>
          <p className="text-body-md text-card-foreground mb-3">
            We provide complete data & schema migration services including stored proc/function conversion, triggers, indices and report migration with automated validations.
          </p>

          <ul className="list-disc pl-5 text-card-foreground space-y-2">
            <li>Informix → Oracle, SQL Server, MySQL, PostgreSQL</li>
            <li>Sybase → Oracle, SQL Server, MySQL, PostgreSQL</li>
            <li>PostgreSQL → Oracle, SQL Server, MySQL</li>
            <li>DB2 → Oracle, SQL Server, MySQL, PostgreSQL</li>
          </ul>
        </section>

        {/* Dev & Deploy summary */}
        <section id="dev" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-3">Dev & Deployment</h2>
          <p className="text-body-md text-card-foreground mb-3">
            CI/CD, containerization, cloud packaging and environment automation to ensure repeatable deployments and smooth handoffs to operations.
          </p>
        </section>

        {/* Platforms horizontal quick-nav (like the tab row under banner on old site) */}
        <nav className="flex flex-wrap gap-4 items-center border-t pt-6">
          <Link to="#powerbuilder" className="text-sm font-medium text-foreground">PowerBuilder</Link>
          <Link to="#forte" className="text-sm text-muted-foreground">Forte</Link>
          <Link to="#oracleforms" className="text-sm text-muted-foreground">Oracle Forms</Link>
          <Link to="#proc" className="text-sm text-muted-foreground">ProC</Link>
          <Link to="#informix4gl" className="text-sm text-muted-foreground">Informix 4GL</Link>
          <Link to="#cobol" className="text-sm text-muted-foreground">Cobol</Link>
          <Link to="#unibasic" className="text-sm text-muted-foreground">UniBasic</Link>
          <Link to="#visualbasic" className="text-sm text-muted-foreground">Visual Basic</Link>
          <Link to="#visualfoxpro" className="text-sm text-muted-foreground">Visual FoxPro</Link>
        </nav>

        {/* Platform sections (short previews). The ids match header / mega menu anchors */}
        <section id="powerbuilder" className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">PowerBuilder</h3>
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <p className="text-card-foreground">High-confidence migration for PowerBuilder — automated and manual conversion options to Java/JEE or modern stacks.</p>
            <div className="mt-4">
              {/* Link to the full page if you also created PowerBuilderMigration.tsx */}
              <Link to="/services/powerbuilder" className="inline-flex items-center gap-2 rounded-md bg-sky-600 text-white px-4 py-2 text-sm">
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <section id="forte" className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Forte</h3>
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <p className="text-card-foreground">Forte migration support and modernization services.</p>
          </div>
        </section>

        <section id="oracleforms" className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Oracle Forms</h3>
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <p className="text-card-foreground">Oracle Forms modernization to web/mobile with automated tooling and templates.</p>
          </div>
        </section>

        {/* Add remaining platform sections */}
        <section id="proc" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">ProC</h3>
          <p className="text-card-foreground">ProC migration details...</p>
        </section>

        <section id="informix4gl" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Informix 4GL</h3>
          <p className="text-card-foreground">Informix 4GL migration details...</p>
        </section>

        <section id="cobol" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Cobol</h3>
          <p className="text-card-foreground">Cobol migration details...</p>
        </section>

        <section id="unibasic" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">UniBasic</h3>
          <p className="text-card-foreground">UniBasic migration details...</p>
        </section>

        <section id="visualbasic" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Visual Basic</h3>
          <p className="text-card-foreground">Visual Basic migration details...</p>
        </section>

        <section id="visualfoxpro" className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground">Visual FoxPro</h3>
          <p className="text-card-foreground">Visual FoxPro migration details...</p>
        </section>

      </div>
    </main>
  );
}
