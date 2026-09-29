import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { companyData } from "../../data/companyData";
import ScrollReveal from "../ScrollReveal";

export default function CTASection({
  title = "Ready to Plan Your Custom Elevator Installation?",
  subtitle = "Our engineering team provides complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Gujarat and Western India.",
  badge = "Direct Factory, Ahmedabad",
  variant = "gradient", // "gradient" | "dark" | "teal"
  className = ""
}) {
  const variantStyles = {
    gradient: "bg-gradient-to-r from-brand-teal via-teal-800 to-slate-950 text-white border border-teal-700/50",
    dark: "bg-slate-900 text-white border border-slate-800",
    teal: "bg-brand-teal text-white border border-teal-600",
  };

  return (


    // <section className={`w-full m-auto px-4 sm:px-6 lg:px-8 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl ${className} ${variantStyles[variant] || variantStyles.gradient} overflow-hidden `}>
    <section
      className={`w-full m-auto px-4 sm:px-6 lg:px-8 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl ${className
        } ${variantStyles[variant] || variantStyles.gradient
        } overflow-hidden`}
    >
      <ScrollReveal direction="up" distance={20} duration={500}>
        <div
          className={` flex flex-col lg:flex justify-between  gap-8  relative `}
        >
          {/* Ambient light blur */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 text-center lg:text-left m-auto max-w-2xl relative z-10">

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-teal-100/90 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center  lg:justify-start gap-4 pt-2 text-xs text-teal-200">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Zero Cost Site Consultation</span>
              </span>
              <span>&bull;</span>
              <span>24/7 Breakdown Assistance</span>
              <span>&bull;</span>
              <span>Kathwada Works Delivery</span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className=" w-full flex flex-col sm:flex-row items-center justify-center gap-3 lg:w-auto relative z-10 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-xl transition-all transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Request Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call +91 82008 59171</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
