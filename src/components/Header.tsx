

// // src/components/Header.tsx
// import { useState, useRef, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "@/assets/logo.png"; // <-- put your logo here (png/svg)

// const Header = (): JSX.Element => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [corporateOpen, setCorporateOpen] = useState(false);

//   // close mobile menu on resize to desktop
//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 768) setIsMenuOpen(false);
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // optional: close dropdowns when clicking outside
//   const servicesRef = useRef<HTMLDivElement | null>(null);
//   const corporateRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const onDocClick = (e: MouseEvent) => {
//       const target = e.target as Node;
//       if (servicesRef.current && !servicesRef.current.contains(target)) {
//         setServicesOpen(false);
//       }
//       if (corporateRef.current && !corporateRef.current.contains(target)) {
//         setCorporateOpen(false);
//       }
//     };
//     document.addEventListener("click", onDocClick);
//     return () => document.removeEventListener("click", onDocClick);
//   }, []);

//   /**
//    * Notes:
//    * - Clicking the "Services" label navigates to the PowerBuilder default page.
//    * - The chevron toggles the submenu (so user can both navigate or open submenu).
//    */

//   return (
//     <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo -> clickable to home */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Arkin Software Technologies" className="h-10 w-auto object-contain" />
//             {/* optional text next to logo (uncomment if needed) */}
//             {/* <span className="hidden md:inline font-semibold text-lg text-foreground">ARKIN SOFTWARE TECHNOLOGIES</span> */}
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <NavLink
//               to="/migration"
//               className={({ isActive }) =>
//                 `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
//               }
//             >
//               Migration Tools
//             </NavLink>

//             {/* Services (label navigates to default powerbuilder) */}
//             <div className="relative" ref={servicesRef}>
//               <div className="flex items-center gap-2">
//                 <Link
//                   to="/services/powerbuilder"
//                   className="text-base text-muted-foreground hover:text-foreground transition-colors"
//                   onClick={() => setServicesOpen(false)}
//                 >
//                   Services
//                 </Link>

//                 <button
//                   onClick={() => setServicesOpen((s) => !s)}
//                   aria-haspopup="menu"
//                   aria-expanded={servicesOpen}
//                   className="p-1 text-muted-foreground hover:text-foreground transition-colors"
//                 >
//                   <ChevronDown size={16} />
//                 </button>
//               </div>

//               {/* Dropdown panel */}
//               {servicesOpen && (
//                 <div className="absolute left-0 mt-3 min-w-[220px] bg-white rounded-md shadow-lg border border-border p-2 z-50">
//                   <Link
//                     to="/services/powerbuilder"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setServicesOpen(false)}
//                   >
//                     PowerBuilder
//                   </Link>

//                   <Link
//                     to="/services/application-migration"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setServicesOpen(false)}
//                   >
//                     Application Migration
//                   </Link>

//                   <Link
//                     to="/services/database-migration"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setServicesOpen(false)}
//                   >
//                     Database Migration
//                   </Link>

//                   <Link
//                     to="/services/dev-deploy"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setServicesOpen(false)}
//                   >
//                     Dev &amp; Deployment
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/cloud"
//               className={({ isActive }) =>
//                 `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
//               }
//             >
//               Cloud
//             </NavLink>

//             <NavLink
//               to="/analytics"
//               className={({ isActive }) =>
//                 `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
//               }
//             >
//               Analytics
//             </NavLink>

//             {/* Corporate - label NAV + chevron for submenu */}
//             <div className="relative" ref={corporateRef}>
//               <div className="flex items-center gap-2">
//                 <Link
//                   to="/corporate"
//                   className="text-base text-muted-foreground hover:text-foreground transition-colors"
//                   onClick={() => setCorporateOpen(false)}
//                 >
//                   Corporate
//                 </Link>

//                 <button
//                   onClick={() => setCorporateOpen((s) => !s)}
//                   aria-haspopup="menu"
//                   aria-expanded={corporateOpen}
//                   className="p-1 text-muted-foreground hover:text-foreground transition-colors"
//                 >
//                   <ChevronDown size={14} />
//                 </button>
//               </div>

//               {corporateOpen && (
//                 <div className="absolute left-0 mt-3 min-w-[220px] bg-white rounded-md shadow-lg border border-border p-2 z-50">
//                   <Link
//                     to="/corporate/advantage"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setCorporateOpen(false)}
//                   >
//                     Advantage
//                   </Link>
//                   <Link
//                     to="/corporate/reach-us"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setCorporateOpen(false)}
//                   >
//                     Reach Us
//                   </Link>
//                   <Link
//                     to="/corporate/privacy-policy"
//                     className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded"
//                     onClick={() => setCorporateOpen(false)}
//                   >
//                     Privacy Policy
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/careers"
//               className={({ isActive }) =>
//                 `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
//               }
//             >
//               Careers
//             </NavLink>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen((s) => !s)}
//             className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
//             aria-label="Toggle menu"
//             aria-expanded={isMenuOpen}
//           >
//             {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-3 border-t border-border">
//             <nav className="flex flex-col space-y-2">
//               <Link to="/migration" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">
//                 Migration Tools
//               </Link>

//               {/* Mobile services with collapsible */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setServicesOpen((s) => !s)}
//                   className="w-full flex items-center justify-between text-base text-muted-foreground hover:text-foreground py-2"
//                   aria-expanded={servicesOpen}
//                 >
//                   <span>Services</span>
//                   <ChevronDown size={16} />
//                 </button>

//                 {servicesOpen && (
//                   <div className="pl-4 flex flex-col gap-1">
//                     <Link to="/services/powerbuilder" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>
//                       PowerBuilder
//                     </Link>
//                     <Link to="/services/application-migration" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>
//                       Application Migration
//                     </Link>
//                     <Link to="/services/database-migration" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>
//                       Database Migration
//                     </Link>
//                     <Link to="/services/dev-deploy" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>
//                       Dev & Deployment
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link to="/cloud" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Cloud</Link>
//               <Link to="/analytics" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Analytics</Link>

//               {/* Mobile corporate */}
//               <div className="px-2">
//                 <button
//                   onClick={() => setCorporateOpen((s) => !s)}
//                   className="w-full flex items-center justify-between text-base text-muted-foreground hover:text-foreground py-2"
//                   aria-expanded={corporateOpen}
//                 >
//                   <span>Corporate</span>
//                   <ChevronDown size={16} />
//                 </button>

//                 {corporateOpen && (
//                   <div className="pl-4 flex flex-col gap-1">
//                     <Link to="/corporate" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Corporate (Overview)</Link>
//                     <Link to="/corporate/advantage" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Advantage</Link>
//                     <Link to="/corporate/reach-us" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Reach Us</Link>
//                     <Link to="/corporate/privacy-policy" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
//                   </div>
//                 )}
//               </div>

//               <Link to="/careers" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Careers</Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.tsx
// src/components/Header.tsx
// src/components/Header.tsx
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const corporateRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (corporateRef.current && !corporateRef.current.contains(target)) {
        setCorporateOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* narrower padding so elements sit closer to edges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo: tiny left nudge (-ml-2) so it sits nearer the left edge */}
          <Link to="/" className="flex items-center gap-3 -ml-2">
            <img
              src={logo}
              alt="Arkin Software Technologies"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav: aligned right but with small right padding to avoid touching edge */}
          <nav className="hidden md:flex items-center space-x-7 pr-2">
            <NavLink
              to="/migration"
              className={({ isActive }) =>
                `text-base ${
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Migration Tools
            </NavLink>

            {/* Services with chevron */}
            <div className="relative" ref={servicesRef}>
              <div className="flex items-center gap-2">
                <Link
                  to="/services/powerbuilder"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              {servicesOpen && (
                <div className="absolute left-0 mt-3 min-w-[220px] bg-white rounded-md shadow-lg border border-border p-2 z-50">
                  <Link to="/services/powerbuilder" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">PowerBuilder</Link>
                  <Link to="/services/application-migration" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">Application Migration</Link>
                  <Link to="/services/database-migration" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">Database Migration</Link>
                  <Link to="/services/dev-deploy" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">Dev & Deployment</Link>
                </div>
              )}
            </div>

            <NavLink
              to="/cloud"
              className={({ isActive }) =>
                `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              Cloud
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              Analytics
            </NavLink>

            {/* Corporate */}
            <div className="relative" ref={corporateRef}>
              <div className="flex items-center gap-2">
                <Link
                  to="/corporate"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setCorporateOpen(false)}
                >
                  Corporate
                </Link>
                <button
                  onClick={() => setCorporateOpen((s) => !s)}
                  aria-expanded={corporateOpen}
                  aria-haspopup="menu"
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown size={14} />
                </button>
              </div>

              {corporateOpen && (
                <div className="absolute left-0 mt-3 min-w-[220px] bg-white rounded-md shadow-lg border border-border p-2 z-50">
                  <Link to="/corporate/advantage" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">Advantage</Link>
                  <Link to="/corporate/reach-us" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">Reach Us</Link>
                  <Link to="/corporate/privacy-policy" className="block px-3 py-2 text-sm text-foreground hover:bg-slate-50 rounded">Privacy Policy</Link>
                </div>
              )}
            </div>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-base ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              Careers
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-border">
            <nav className="flex flex-col space-y-2 px-2">
              <Link to="/migration" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Migration Tools</Link>

              <div className="px-2">
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  className="w-full flex items-center justify-between text-base text-muted-foreground hover:text-foreground py-2"
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown size={16} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    <Link to="/services/powerbuilder" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>PowerBuilder</Link>
                    <Link to="/services/application-migration" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Application Migration</Link>
                    <Link to="/services/database-migration" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Database Migration</Link>
                    <Link to="/services/dev-deploy" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Dev & Deployment</Link>
                  </div>
                )}
              </div>

              <Link to="/cloud" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Cloud</Link>
              <Link to="/analytics" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Analytics</Link>

              <div className="px-2">
                <button
                  onClick={() => setCorporateOpen((s) => !s)}
                  className="w-full flex items-center justify-between text-base text-muted-foreground hover:text-foreground py-2"
                  aria-expanded={corporateOpen}
                >
                  <span>Corporate</span>
                  <ChevronDown size={16} />
                </button>
                {corporateOpen && (
                  <div className="pl-4 flex flex-col gap-1">
                    <Link to="/corporate" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Corporate (Overview)</Link>
                    <Link to="/corporate/advantage" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Advantage</Link>
                    <Link to="/corporate/reach-us" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Reach Us</Link>
                    <Link to="/corporate/privacy-policy" className="text-sm text-foreground hover:text-foreground/80" onClick={() => setIsMenuOpen(false)}>Privacy Policy</Link>
                  </div>
                )}
              </div>

              <Link to="/careers" className="px-2 py-2 text-base text-muted-foreground hover:text-foreground">Careers</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
