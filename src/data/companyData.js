import { assetUrl } from "../utils/assetPath";

export const companyData = {
  name: "KRUPA ELEVATORS",
  shortName: "Krupa",
  tagline: "Reliable Riding Experience",
  mission: "A flexible solution that unifies form and function. An all-round elevator applicable to multiple building types, with outstanding architectural flexibility for car, door and shaft dimensions. Precision assures a smooth and safe user experience.",
  servicesSummary: "Elevators Servicing, Installation, Upgrades & Maintenance",
  contacts: {
    phone: "+91 82008 59171",
    phoneRaw: "+918200859171",
    whatsapp: "918200859171",
    // whatsapp: "916353344875",
    emailPrimary: "info@krupaelevators.com",
    emailSales: "sales@krupaelevators.com",
    website: "www.krupaelevators.com",
    office: {
      title: "Registered Office",
      address: "FF-6 Sagun Enclave, Beside Nikol Community Hall, Nr. Manohar Villa Char Rasta, Nikol, Ahmedabad-382345, Gujarat, India",
      city: "Ahmedabad",
      pincode: "382345"
    },
    factory: {
      title: "Manufacturing Works",
      address: "1, Heritage Industrial Hub, Nr. Global Industrial Estate, Nr. Kotak Mahindra Bank, Kathwada GIDC Road No 5, Ahmedabad-382430, Gujarat, India",
      city: "Ahmedabad",
      pincode: "382430"
    }
  },
  brochurePdf: assetUrl("/assets/krupa-brochure.pdf"),
  logo: assetUrl("/assets/logo-clean.png"),
  heroImage: assetUrl("/assets/generated/capsule-hero.jpg"),
  villaElevatorImage: assetUrl("/assets/generated/home-elevator.jpg"),
  stats: [
    { label: "Energy Cut (PMS)", value: "30%", detail: "PMS Gearless traction machine vs conventional geared machine" },
    { label: "Lighting Savings", value: "50%", detail: "Eco LED lighting with smart auto-shutoff when idle" },
    { label: "Space Reduction", value: "40%", detail: "MRL machine-roomless technology & compact home lift footprint" },
    { label: "Product Portfolio", value: "10+", detail: "Specialized elevator classes engineered to international safety standards" }
  ],
  pillars: [
    {
      title: "Inspiring Design",
      desc: "Futuristic aesthetics and 11 distinct cabin finish series that elevate the look, feel and class of any building."
    },
    {
      title: "Improved Comfort",
      desc: "Ultra-smooth acceleration, low-noise gearless machines, and precision millimeter levelling for a serene ride."
    },
    {
      title: "Increased Eco-Efficiency",
      desc: "Cutting-edge PMS permanent magnet drives, V3F inverters, and auto-idle shutoff cutting carbon emissions."
    },
    {
      title: "Ideal Partner",
      desc: "Comprehensive lifecycle support from site survey, bespoke CAD planning, flawless installation to 24/7 AMC."
    }
  ],
  attributes: [
    { title: "Smart", desc: "Touchless call options, microprocessor logic & telemetry." },
    { title: "Sophisticated", desc: "Titanium gold, rose gold, hairline finishes & LED ceilings." },
    { title: "Strength", desc: "Up to 4000kg freight capacity with reinforced steel construction." },
    { title: "Spacious", desc: "Maximized car dimensions with minimal shaft overhead and pit requirements." },
    { title: "Smooth", desc: "Closed-loop V3F drive for gentle starts and bump-free stops." }
  ]
};

export const trustedSolutionSection = {
  heading: "Trusted Elevator Solution",
  imageBandWords: ["Smart", "Sophisticated", "Strength", "Spacious", "Smooth"],
  quote:
    "A flexible solution that unifies form and function. An all-round elevator applicable to multiple building types, with outstanding architectural flexibility for car, door and shaft dimensions. Precision assure a smooth and safe user experience.",
  modernElevatorHeading: "Modern Elevator for Residential & Commercial Buildings",
  modernElevatorParagraphs: [
    "Created to enhance the modern and contemporary look of low, mid & high-rise residential buildings and low & mid-rise commercial buildings.",
    "The design-rich KRUPA ELEVATORS now offer more flexibility to choose the ideal elevators that add to the look, feel, style and class of both your building's interiors and exteriors.",
    "Excellent ride comfort, energy savings, product design with futuristic technology & impressive aesthetics all come together in perfect combination from KRUPA ELEVATORS, to take the quality of elevator experiences several notches higher for the builder, developer, architect, facility manager and the end user.",
  ],
  elevateYourExperience: [
    "INSPIRING DESIGN",
    "IMPROVED COMFORT",
    "INCREASED ECO-EFFICIENCY",
    "IDEAL PARTNER",
  ],
};
