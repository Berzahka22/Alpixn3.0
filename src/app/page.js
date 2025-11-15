"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MdCalendarToday,
  MdArrowForward,
  MdMoreHoriz,
  MdMenu,
  MdSearch,
} from "react-icons/md";
import Image from "next/image";

import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./hero.css";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#00070E] text-white overflow-x-hidden font-manrope">
      {/* Navigation Blanche */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg py-3 shadow-lg border-b border-gray-200"
            : "bg-white py-4"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
         <div className="flex items-center space-x-3">
  <a href="/" aria-label="Home">
    <Image
      src="/images/logo.png" // chemin relatif dans le dossier public
      alt="Logo Alpix"
      width={128}             // largeur
      height={56}             // hauteur
      className="object-contain"
    />
  </a>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
            {[
              "Home",
              "About",
              "Offshore Developer",
              "Products",
              "Our Expertise",
              "Technologies",
              "Resources",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-[#389EFF] transition-colors duration-300 font-medium text-sm lg:text-base px-2 py-1"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </button>
            ))}
            {/* Bouton Contact */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 bg-[#389EFF] text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg text-sm lg:text-base"
              aria-label="Contact us"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 z-60 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-lg transition-all duration-500 z-40 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto px-6 pt-24 pb-8 flex flex-col space-y-4">
            {[
              "Home",
              "About",
              "Offshore Developer",
              "Products",
              "Our Expertise",
              "Technologies",
              "Resources",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-[#389EFF] transition-colors duration-300 text-left py-3 text-lg font-semibold border-b border-gray-200"
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
      id="Home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-slate-200"
      style={{
        background:
          "linear-gradient(180deg, #02182eff 0%, rgba(3, 32, 63, 0.53) 100%)",
      }}
    >
      {/* Fond étoiles et glow */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="stars-layer-1"></div>
        <div className="stars-layer-2"></div>
        <div className="stars-layer-3"></div>
        <div className="absolute w-[350px] h-[350px] left-[-120px] top-[-120px] bg-[#389EFF] opacity-[0.04] blur-[100px]"></div>
        <div className="absolute w-[350px] h-[350px] right-[-120px] top-[-120px] bg-[#389EFF] opacity-[0.04] blur-[100px]"></div>
      </div>

      <div className="glow-arc relative z-10" aria-hidden="true"></div>

      <main className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Innovate With Us
        </h1>
        <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
          We create solutions for remote teams. If you enjoy solving problems,
          you can make a difference.
        </p>
      </main>
    </section>

      {/* Section Offres d'emploi */}
      <section
        id="formations"
        className="relative min-h-screen py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #00070E 0%, rgba(0, 35, 72, 0.15) 100%)",
        }}
        aria-labelledby="jobs-heading"
      >
        {/* Ellipses de fond */}
        <div className="absolute w-[298px] h-[298px] left-[-88px] top-[-114px] bg-[#389EFF] opacity-39 blur-[250px]" aria-hidden="true"></div>
        <div className="absolute w-[298px] h-[298px] right-[-88px] top-[-114px] bg-[#389EFF] opacity-39 blur-[250px]" aria-hidden="true"></div>

        {/* Contenu de la section */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          {/* En-tête avec titre et barre de recherche */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            
            {/* Barre de recherche et filtre */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto ml-[950px]
" >
              <div className="relative w-full sm:w-64 lg:w-80">
                <label htmlFor="job-search" className="sr-only">Search jobs and companies</label>
                <input
                  id="job-search"
                  className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-[#389EFF]/20 backdrop-blur-sm border border-[#389EFF]/60 text-white placeholder:text-white/80 focus:ring-2 focus:ring-[#389EFF] focus:border-[#389EFF] transition duration-300"
                  placeholder="Search jobs, companies..."
                  type="text"
                />
                <MdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80" aria-hidden="true" />
              </div>

              {/* Bouton filtre */}
              <button 
                className="p-2.5 border border-[#389EFF]/60 rounded-lg bg-[#389EFF]/20 backdrop-blur-sm hover:bg-[#389EFF]/30 hover:border-[#389EFF]/80 transition duration-300 shrink-0"
                aria-label="Filter jobs"
              >
                <MdMenu className="text-white/80" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Grille des cartes */}
          <div className="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
            {[
              { title: "UX Researcher", type: "Full Time", location: "On-Site", salary: "Monthly ₹30,000 - ₹45,000" },
              { title: "Python Developer", type: "Part Time", location: "On-Site", salary: "Monthly ₹30,000 - ₹45,000" },
              { title: "Graphics Designer", type: "Internship", location: "On-Site", salary: "Monthly ₹30,000 - ₹45,000" },
              { title: "Product Manager", type: "Full Time", location: "On-Site", salary: "Monthly ₹30,000 - ₹45,000" }
            ].map((job, index) => (
              <article
                key={index}
                className="bg-gradient-to-b from-[rgba(24,24,24,0.24)] to-[rgba(56,158,255,0.06)] backdrop-blur-lg border border-white/15 rounded-[15px] p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="company-tag mb-4">
                  <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-[rgba(56,158,255,0.05)] border border-[rgba(56,158,255,0.45)] text-white text-xs sm:text-sm rounded-full">
                    Future Vision Inc.
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white flex-1">
                    {job.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap justify-start lg:justify-end gap-2 sm:gap-3 lg:gap-6 text-white/80 text-xs sm:text-sm lg:text-base">
                    <span>{job.type}</span>
                    <span className="hidden sm:inline">|</span>
                    <span>{job.location}</span>
                    <span className="hidden sm:inline">|</span>
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                  {/* Bloc de la date avec icône calendrier */}
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <MdCalendarToday className="text-lg sm:text-xl" aria-hidden="true" />
                    <time dateTime="2025-10-24">Oct 24, 2025</time>
                  </div>

                  <button 
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-t from-[#002348] to-[#00141F] text-white font-semibold rounded-[10px] hover:bg-[#389EFF] transition-all duration-300 shadow-lg text-sm w-full sm:w-auto justify-center"
                    aria-label={`View details for ${job.title} position`}
                  >
                    <span>View Details</span>
                    <MdArrowForward className="text-lg" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA avec graphique */}
      <section 
        className="bg-background-light dark:bg-background-dark flex items-center justify-center min-h-[80vh] p-4 sm:p-6 lg:p-8"
        aria-labelledby="cta-heading"
      >
        <div className="gradient-container gradient-side-blue-dark-aware p-6 sm:p-8 md:p-12 max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Texte gauche */}
            <div className="flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
              <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Shape the Future With Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-6">
                Join a team that's redefining innovation. Explore open roles and
                start your journey today.
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#389EFF] text-white font-semibold rounded-lg shadow-md hover:bg-[#1E70FF] transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
                  aria-label="Apply now for open positions"
                >
                  <span>Apply Now</span>
                  <MdArrowForward className="text-lg" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Carte Job Analysis */}
            <div className="bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20 dark:border-slate-800/50">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base">
                  Job Analysis
                </h3>
                <button 
                  className="p-1.5 rounded-lg bg-[#389EFF]/20 backdrop-blur-sm border border-[#389EFF]/40 hover:bg-[#389EFF]/30 hover:border-[#389EFF]/60 text-[#389EFF] hover:text-[#1E70FF] transition-all duration-200"
                  aria-label="More options for job analysis"
                >
                  <MdMoreHoriz className="text-base" aria-hidden="true" />
                </button>
              </div>

              {/* Graphique */}
              <div className="relative">
                <div className="absolute top-1/3 left-0 right-0 h-px border-t border-dashed border-gray-400 dark:border-gray-600" aria-hidden="true"></div>

                <div className="flex justify-between items-end h-24 sm:h-28 lg:h-32 relative px-2">
                  <div className="w-full flex justify-between items-end absolute bottom-4 left-0 right-0 px-2 h-full">
                    {/* Barres normales */}
                    {[60, 75, 50, 70, 65, 80, 55, 35, 95, 70, 60, 78].map((height, index) => (
                      <div
                        key={index}
                        className={`w-1.5 sm:w-2 rounded-full ${
                          index === 8 ? "bg-blue-500 shadow-[0_0_6px] shadow-blue-500/50" : "bg-gray-400 dark:bg-gray-600"
                        }`}
                        style={{ height: `${height}%` }}
                        aria-hidden="true"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Légendes en bas */}
                <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 px-2" aria-hidden="true">
  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => (
    <span key={index}>{month}</span>
  ))}
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section
        id="footer"
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #00070E 0%, rgba(0, 35, 72, 0.15) 100%)",
        }}
      >
        {/* Ellipses de fond footer */}
        <div className="absolute w-[320px] h-[320px] left-[-79px] top-[-80px] bg-[#389EFF] opacity-53 blur-[250px]" aria-hidden="true"></div>
        <div className="absolute w-[320px] h-[320px] right-[-79px] top-[-80px] bg-[#389EFF] opacity-53 blur-[250px]" aria-hidden="true"></div>
        <div className="absolute w-[320px] h-[320px] left-[-79px] bottom-[-80px] bg-[#389EFF] opacity-53 blur-[250px]" aria-hidden="true"></div>
        <div className="absolute w-[320px] h-[320px] right-[-79px] bottom-[-80px] bg-[#389EFF] opacity-53 blur-[250px]" aria-hidden="true"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Newsletter */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              Subscribe To Our Newsletter
            </h2>
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email Address"
                className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-[#F9F9F9] text-[#6F6F6F] rounded-[3px] sm:rounded-l-[3px] sm:rounded-r-none border-none focus:outline-none text-sm sm:text-base"
              />
              <button 
                className="py-3 sm:py-4 px-6 sm:px-8 bg-[#389EFF] text-white font-semibold rounded-[3px] sm:rounded-l-none sm:rounded-r-[3px] hover:bg-[#2d8ae6] transition-colors duration-300 text-sm sm:text-base"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Grille de liens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                {[
                  "Home",
                  "About",
                  "Offshore Developers",
                  "Products",
                  "Our Expertise",
                  "Technologies",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item)}
                      className="hover:text-[#389EFF] transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                {[
                  "Software Development",
                  "Mobile App Development",
                  "Application Modernization",
                  "CRM Development Services",
                  "ERP Software",
                  "Data Analytics",
                  "DevOps Services",
                  "Cloud Consulting",
                  "Staff Augmentation",
                  "Hire Developers",
                ].map((item) => (
                  <li key={item}>
                    <button className="hover:text-[#389EFF] transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Industries</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                {[
                  "FinTech",
                  "Insurtech",
                  "Proptech",
                  "EdTech",
                  "Media & Entertainment",
                  "Healthcare",
                  "Retail",
                  "Facility Management",
                  "Supply Chain & Logistics",
                  "Telecom",
                  "Travel & Hospitality",
                ].map((item) => (
                  <li key={item}>
                    <button className="hover:text-[#389EFF] transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Offshore Developers */}
            <div className="lg:col-span-2 xl:col-span-1">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Offshore Developers</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                {[
                  "Hire Backend Developer",
                  "Hire Frontend Developer",
                  "Hire App Developer",
                  "Hire DevOps Engineer",
                  "Hire AI Engineer",
                  "Hire Full Stack Developer",
                  "Hire Salesforce Developer",
                  "Hire PowerApps Developers",
                ].map((item) => (
                  <li key={item}>
                    <button className="hover:text-[#389EFF] transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Resources</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/80 text-sm sm:text-base">
                {["Portfolio", "Careers", "Blog", "Our Team", "Interns"].map(
                  (item) => (
                    <li key={item}>
                      <button className="hover:text-[#389EFF] transition-colors text-left">
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Localisations */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { code: "in", name: "India" },
              { code: "us", name: "New York, USA" },
              { code: "au", name: "Sydney, Australia" },
              { code: "ae", name: "Dubai, UAE" },
              { code: "gb", name: "London, UK" },
              { code: "it", name: "Milan, Italy" },
              { code: "th", name: "Thailand" },
              { code: "za", name: "South Africa" },
              { code: "ca", name: "Canada" },
            ].map(({ code, name }) => (
              <div key={code} className="flex items-center gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm">
                <img
                  src={`https://flagcdn.com/w40/${code}.png`}
                  alt={`Flag of ${name}`}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#389EFF]"
                  loading="lazy"
                />
                <span>{name}</span>
              </div>
            ))}
          </div>

          {/* Footer bottom */}
          <div className="border-t border-white/20 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
              {/* Social Media */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-white/80 font-medium text-sm sm:text-base">Follow Us :</span>
                <div className="flex gap-2 sm:gap-3">
                  {[
                    faFacebookF,
                    faLinkedinIn,
                    faInstagram,
                    faTwitter,
                    faGithub,
                  ].map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-[#389EFF] rounded-full flex items-center justify-center text-white hover:bg-[#2d8ae6] transition-colors"
                      aria-label={`Follow us on ${icon.iconName}`}
                    >
                      <FontAwesomeIcon icon={icon} className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Copyright */}
              <div className="text-white/80 text-center lg:text-right">
                <p className="text-xs sm:text-sm">
                  © 2016 - 2025 Alpixn Technologies Private Limited All Rights
                  Reserved.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex gap-3 sm:gap-4 text-white/80 text-xs sm:text-sm">
                <a href="#" className="hover:text-[#389EFF] transition-colors">
                  Privacy Policy
                </a>
                <span aria-hidden="true">|</span>
                <a href="#" className="hover:text-[#389EFF] transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles CSS globaux pour Manrope */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Manrope', sans-serif;
        }
        
        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>
    </div>
  );
}