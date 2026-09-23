import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Activity,
  Cpu,
  MapPin,
} from "lucide-react";
import { companyData, trustedSolutionSection } from "../data/companyData";
import { elevatorMaster } from "../data/elevatorMaster";
import ScrollReveal from "../components/ScrollReveal";
import { assetUrl } from "../utils/assetPath";
import Seo from "../components/common/Seo";
import CTASection from "../components/common/CTASection";
import LiftEstimatorWizard from "../components/LiftEstimatorWizard";

// Hero visual scenes
const heroScenes = [
  {
    id: "building",
    tag: "High-Rise Residential & Commercial",
    title: "Passenger Elevators",
    subtitle: "High-speed passenger elevator with precision group dispatch and whisper-quiet PMSM drive",
    image: assetUrl("/assets/hero/building.jpg"),
    link: "/products/elevators"
  },
  {
    id: "villa",
    tag: "Private Luxury Villas & Bungalows",
    title: "Home Villa Lifts",
    subtitle: "Panoramic glass home lift with shallow 550mm pit and single-phase 220V power compatibility",
    image: assetUrl("/assets/generated/home-elevator.jpg"),
    link: "/products/elevators"
  },
  {
    id: "commercial",
    tag: "Commercial Atriums & Retail",
    title: "Capsule Elevators",
    subtitle: "High-impact panoramic glass capsule elevators with architectural exterior contours",
    image: assetUrl("/assets/generated/capsule-hero.jpg"),
    link: "/products/elevators"
  },
  {
    id: "hospital",
    tag: "Healthcare & Critical Care",
    title: "Hospital Bed Elevators",
    subtitle: "Stretcher-friendly bed lifts with micro-leveling accuracy (±3mm) and priority medical recall",
    image: assetUrl("/assets/hero/hospital.jpg"),
    link: "/products/elevators"
  },
  {
    id: "car-park",
    tag: "Automotive & Parking Facilities",
    title: "Car Elevators & Parking",
    subtitle: "Heavy-capacity automotive vehicle lifts up to 4000 kg with dual-side cabin operating stations",
    image: assetUrl("/assets/hero/car-park.jpg"),
    link: "/products/elevators"
  },
  {
    id: "industrial",
    tag: "Industrial Logistics & Warehousing",
    title: "Goods & Freight Lifts",
    subtitle: "Rugged high-tonnage freight cargo lifts with reinforced steel sills and collapsible gates",
    image: assetUrl("/assets/hero/industrial.jpg"),
    link: "/products/elevators"
  }
];

export default function Home({ onOpenBrochure }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Hero carousel timer — 5.5 s per slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroScenes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      <Seo
        title="Krupa Elevators — Reliable Riding Experience"
        description="KRUPA ELEVATORS designs and manufactures passenger, capsule, hospital, goods, car, MRL, home and hydraulic elevators in Ahmedabad, Gujarat — engineered to the BIS IS 14665 standard."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative w-full h-[calc(100vh-64px)] min-h-[580px] max-h-[820px] bg-slate-950 overflow-hidden flex items-center"
      >

        {/* ── Full-layer crossfade slides ────────────────────────────────────────
            Every slide is one absolute layer = image + gradient + text content.
            Only the active layer is opacity-1; all others opacity-0.
            Both image and text dissolve together for a seamless blend.          */}
        {heroScenes.map((scene, index) => {
          const isActive = index === currentHeroIndex;
          return (
            <div
              key={scene.id}
              className="absolute inset-0 flex items-center"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
                zIndex: isActive ? 10 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Background image */}
              <img
                src={scene.image}
                alt={scene.title}
                className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              />

              {/* Dark gradient overlay — same as original */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />

              {/* Foreground text content — sits on top of the gradient */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
                <div className="max-w-2xl space-y-5">

                  {/* Category tag */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                    <span>{scene.tag}</span>
                  </div>

                  {/* Title + subtitle */}
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                      {scene.title}
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-200 to-white mt-1">
                        by KRUPA Elevators
                      </span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                      {scene.subtitle}
                    </p>
                  </div>

                  {/* Company info badges */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: ShieldCheck, text: "IS 14665 & BIS Certified",           color: "text-brand-teal"   },
                      { icon: Zap,         text: "Up to 30% Energy Savings",            color: "text-brand-teal"   },
                      { icon: MapPin,      text: "Ahmedabad, Gujarat — Direct Factory", color: "text-brand-orange" },
                    ].map(({ icon: Icon, text, color }) => (
                      <span
                        key={text}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${color} bg-slate-950/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full`}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {text}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <Link
                      to="/products/elevators"
                      className="px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 transition-all flex items-center space-x-2 group"
                    >
                      <span>Explore Elevators</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => {
                        document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center space-x-2 cursor-pointer"
                    >
                      <span>Submit Query / Get Quote</span>
                    </button>
                  </div>

                  {/* Trust strip */}
                  <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Direct Kathwada Manufacturing</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>24/7 Breakdown Assistance</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Turnkey Installation</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* ── Progress bar — refills over 5.5 s, resets when index changes ───── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
          <div
            key={currentHeroIndex}
            className="h-full bg-brand-teal origin-left"
            style={{ animation: "hero-progress 5.5s linear forwards" }}
          />
        </div>

        {/* ── Navigation dots ──────────────────────────────────────────────────── */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center items-center space-x-2">
          {heroScenes.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentHeroIndex
                  ? "w-8 bg-brand-teal"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              title={scene.title}
              aria-label={`Go to ${scene.title}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT TEASER — condensed; full depth lives on /about                  */}
      {/* ========================================================================= */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">
              ARCHITECTURAL SPECIFICATION & OVERVIEW
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>IS 14665 & BIS Certified</span>
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:flex items-center space-x-1.5 text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>Nikol Studio & Kathwada Works, Ahmedabad</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
              {trustedSolutionSection.heading}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Pioneering precision vertical transportation engineered for seamless integration across contemporary residential towers and commercial infrastructures.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-teal hover:text-teal-700 group"
            >
              <span>Learn more about us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Architectural Pull Quote */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-brand-teal">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-brand-teal" />
            </div>
            <p className="text-lg sm:text-2xl text-slate-800 font-light italic leading-relaxed tracking-tight">
              "{trustedSolutionSection.quote}"
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
              <span className="font-bold text-brand-teal tracking-wider">KRUPA ELEVATORS DIRECTIVE</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600">Unified Form & Architectural Function</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600">Zero Middleman Markup</span>
            </div>
          </div>
        </div>

        {/* Compact 4-Pillar Strip */}
        <div className="border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4">
          {companyData.pillars.map((pillar, idx) => (
            <div key={pillar.title} className="p-5 lg:p-6 space-y-2 group transition-all duration-300 hover:bg-slate-50/60">
              <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-brand-teal transition-colors">
                0{idx + 1}
              </span>
              <h4 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 INTERACTIVE 60-SECOND LIFT ESTIMATOR WIZARD                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiftEstimatorWizard onOpenBrochure={onOpenBrochure} />
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR ELEVATOR SECTION (Client-Friendly & Minimal)                         */}
      {/* ========================================================================= */}
      <section id="our-elevators-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Architectural Mobility Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Elevator Solutions for Every Building
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineered for whisper-quiet ride comfort, high energy savings, and reliable daily operation across residential, commercial, medical, and industrial spaces.
            </p>
          </div>
          <Link
            to="/products/elevators"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore All 8 Elevator Models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Client-Focused Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "passenger",
              name: "Passenger Elevators",
              tag: "Residential & Commercial",
              desc: "Smooth, silent, and energy-efficient vertical mobility tailored for apartments, offices, and hotels.",
              image: elevatorMaster.find((e) => e.id === "passenger")?.image || "/assets/elevators/passenger_elevator.jpg",
              highlight: "Whisper-quiet ride & smooth leveling"
            },
            {
              id: "capsule",
              name: "Capsule Elevators",
              tag: "Architectural Landmark",
              desc: "Futuristic curved glass panoramic cabins offering 360-degree views in atriums, malls, and luxury resorts.",
              image: elevatorMaster.find((e) => e.id === "capsule")?.image || "/assets/elevators/capsule_elevator.jpg",
              highlight: "Panoramic 360° glass aesthetics"
            },
            {
              id: "hospital",
              name: "Hospital Bed Elevators",
              tag: "Medical & Stretcher",
              desc: "Spacious cabins with antibacterial wall protection, wide doors, and emergency medical priority features.",
              image: elevatorMaster.find((e) => e.id === "hospital")?.image || "/assets/elevators/hospital_elevator.jpg",
              highlight: "Extra-deep cabins & jerk-free transit"
            },
            {
              id: "goods",
              name: "Goods & Freight Hoists",
              tag: "Industrial Logistics",
              desc: "Rugged structural steel cabins built to handle heavy cargo, forklift loading, and industrial logistics.",
              image: elevatorMaster.find((e) => e.id === "goods")?.image || "/assets/elevators/goods_elevator.jpg",
              highlight: "Heavy payload up to 5000 kg"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 35}
              distance={15}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-48 bg-slate-950 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-teal-300 border border-slate-700">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold drop-shadow-sm">
                      {item.highlight}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/products/elevators/${item.id}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Specifications & Layouts</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERIOR SECTION (Client-Friendly & Minimal)                           */}
      {/* ========================================================================= */}
      <section id="interior-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              Architectural Aesthetics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Cabin Interior Series
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transform every vertical journey into an experience of luxury and comfort with stainless steel, warm LED ceilings, and titanium finishes.
            </p>
          </div>
          <Link
            to="/products/interiors"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore All Cabin Collections</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Cabin Series */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              targetHash: "basic-series-section",
              model: "Basic Series (KEC-01)",
              series: "Basic Series",
              image: assetUrl("/assets/interiors/kec-01.jpg"),
              desc: "Hairline stainless steel with full-width rear mirror that visually amplifies interior cabin space.",
              features: "S.S. Hairline • Full Rear Mirror • LED Ceiling"
            },
            {
              targetHash: "standard-series-section",
              model: "Standard Series (KEC-02)",
              series: "Standard Series",
              image: assetUrl("/assets/interiors/kec-02.jpg"),
              desc: "Active cross-flow blower fan built into the ceiling with half-mirror and wrap-around grab bars.",
              features: "Built-In Blower Fan • Half-Mirror • Ergonomic Grab Bar"
            },
            {
              targetHash: "semi-series-section",
              model: "Semi Designer (KEC-03)",
              series: "Semi Designer",
              image: assetUrl("/assets/interiors/kec-03.jpg"),
              desc: "Warm titanium gold finishes paired with elegant gold ceiling diffusers and classic marble-textured flooring.",
              features: "Titanium Gold Insets • Marble PVC • Ambient Glow"
            },
            {
              targetHash: "premium-series-section",
              model: "Premium Series (KEC-10)",
              series: "Premium Series",
              image: assetUrl("/assets/interiors/kec-10.jpg"),
              desc: "Flagship luxury featuring titanium gold mirror panels, backlit acrylic sky ceiling, and geometric floor medallion.",
              features: "Acrylic Skylight • Titanium Mirror • Ornate Marble"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={item.model}
              direction="up"
              delay={idx * 35}
              distance={15}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-56 bg-slate-950 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 border border-slate-200 shadow-xs">
                      {item.series}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {item.model}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-brand-teal">
                      {item.features}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/products/interiors#${item.targetHash}`}
                    className="w-full flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>View Cabin Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY & MECHANISMS SECTION (Client-Friendly & Minimal)             */}
      {/* ========================================================================= */}
      <section id="mechanisms-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Advanced Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Technology, Safety & Control Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Powered by German-engineered V3F vector drives, energy-saving PMSM motors, and comprehensive fail-safe passenger protection.
            </p>
          </div>
          <Link
            to="/products/technology"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore Technology & Control Systems</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Minimal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Permanent Magnet PMSM Motor",
              category: "Green Drive",
              targetHash: "drive-systems-section",
              desc: "Eco-friendly gearless drive consuming up to 40% less electrical power with whisper-quiet, frictionless operation.",
              benefit: "40% Energy Savings & Zero Lubrication",
              icon: Zap
            },
            {
              title: "Microprocessor V3F Inverter",
              category: "Intelligent Motion",
              targetHash: "inverter-section",
              desc: "Closed-loop vector inverter providing smooth jerk-free S-curve acceleration and millimeter-level landing accuracy.",
              benefit: "Ultra-Smooth Ride & Precision Leveling",
              icon: Cpu
            },
            {
              title: "Multi-Beam Light Curtain",
              category: "Passenger Safety",
              targetHash: "safety-section",
              desc: "Over 128 non-contact infrared beams spanning floor to ceiling that instantly reopen doors before any physical touch.",
              benefit: "100% Non-Contact Passenger Protection",
              icon: ShieldCheck
            },
            {
              title: "Automatic Rescue Device (ARD)",
              category: "Emergency Evacuation",
              targetHash: "safety-section",
              desc: "Intelligent battery backup that automatically navigates the elevator to the nearest landing during power outages.",
              benefit: "Automatic Power-Failure Rescue",
              icon: Activity
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                delay={idx * 35}
                distance={15}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full group">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                        {pillar.category}
                      </span>
                      <h3 className="text-base font-black text-slate-900 mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <Link
                    to={`/products/technology#${pillar.targetHash}`}
                    className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-brand-teal group-hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <span>{pillar.benefit}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GET A QUOTE — short prompt, full inquiry form lives on /contact         */}
      {/* ========================================================================= */}
      <section id="cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <CTASection
          title="Discuss Your Elevator Requirement"
          subtitle="Share your building parameters with our Nikol engineering team for a complimentary AutoCAD General Arrangement (GA) hoistway layout, structural load calculation, and turnkey quotation."
        />
      </section>

      {/* ========================================================================= */}
      {/* 7. FOOTER SECTION (Rendered in App.jsx layout)                           */}
      {/* ========================================================================= */}
    </div>
  );
}
