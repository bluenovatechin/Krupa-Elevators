import React from "react";
import { Link } from "react-router-dom";
import { Building2, ArrowRight, Gauge, Users, Ruler } from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

export default function ElevatorsIndex() {
  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Seo
        title="Elevator Models"
        description="8 engineered elevator classes from Krupa Elevators — Passenger, Capsule, Hospital, Goods, Car, MRL, Home & Hydraulic — with full civil dimension tables and CAD hoistway drawings."
      />

      <PageHero
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: "Elevator Models" }
        ]}
        icon={Building2}
        badge="8 Certified Elevator Classes"
        title="Elevator Models & Applications"
        description="From residential passenger elevators to heavy-tonnage goods hoists, every Krupa elevator is engineered in-house. Browse each model below for its full specification sheet, structural component breakdown, and hoistway CAD drawings."
        whatsappMessage="Hello Krupa Elevators, I would like to consult regarding elevator models and specifications."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        <ScrollReveal direction="up" distance={20}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elevatorMaster.map((elev) => (
              <Link
                key={elev.id}
                to={`/products/elevators/${elev.id}`}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-brand-teal/60 transition-all"
              >
                <div className="relative h-48 bg-slate-950 overflow-hidden">
                  <img
                    src={elev.image}
                    alt={elev.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                    {elev.category}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h2 className="text-lg font-black leading-tight">{elev.name}</h2>
                    <p className="text-[11px] text-slate-300 font-medium">{elev.tagline}</p>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {elev.standardSpecs?.capacity && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Users className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800">Capacity:</strong>{" "}
                          {elev.standardSpecs.capacity}
                        </span>
                      </div>
                    )}
                    {elev.standardSpecs?.ratedSpeed && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Gauge className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800">Rated Speed:</strong>{" "}
                          {elev.standardSpecs.ratedSpeed}
                        </span>
                      </div>
                    )}
                    {elev.standardSpecs?.application && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Building2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-2">
                          <strong className="text-slate-800">Application:</strong>{" "}
                          {elev.standardSpecs.application}
                        </span>
                      </div>
                    )}
                    {elev.standardSpecs?.pitDepth && (
                      <div className="flex items-start space-x-2 text-slate-600">
                        <Ruler className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-slate-800">Pit Depth:</strong>{" "}
                          {elev.standardSpecs.pitDepth}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal">
                    <span>View Full Specifications & Drawings</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <CTASection
          title="Need Custom Hoistway Layouts or Non-Standard Dimensions?"
          subtitle="Our engineering team creates bespoke AutoCAD GA drawings for narrow shafts, shallow pits, and high-tonnage cargo hoists."
          badge="Direct Engineering & CAD Team"
          variant="gradient"
        />
      </div>
    </div>
  );
}
