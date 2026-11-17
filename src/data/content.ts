/* Content comes from https://zbepowereng.com.
   Gallery titles describe the photos and should be confirmed by the company. */
import type { StaticImageData } from "next/image";

import smartBanking from "@/assets/photos/smart-banking.jpg";
import forecourt from "@/assets/photos/forecourt-lighting.jpg";
import highRise from "@/assets/photos/high-rise.jpg";
import office from "@/assets/photos/office-building.jpg";
import westin from "@/assets/photos/westin-addis.png";
import coldRoom from "@/assets/photos/cold-room.jpg";
import minaye from "@/assets/photos/minaye-office-park.jpg";

import conduit from "@/assets/materials/conduit.jpg";
import waterPump from "@/assets/materials/water-pump.jpg";
import ladder from "@/assets/materials/ladder.jpg";
import romelSocket from "@/assets/materials/romel-socket.jpg";
import corrugated from "@/assets/materials/corrugated-conduit.jpg";
import wire from "@/assets/materials/wire.jpg";
import junctionWaterproof from "@/assets/materials/junction-waterproof.jpg";
import safetyVest from "@/assets/materials/safety-vest.jpg";
import tape8m from "@/assets/materials/tape-8m.jpg";
import tHandle from "@/assets/materials/t-handle-allen.jpg";
import junctionBox from "@/assets/materials/junction-box.jpg";
import motionSensor from "@/assets/materials/motion-sensor.jpg";
import impactDrill from "@/assets/materials/impact-drill.jpg";
import torxKey from "@/assets/materials/torx-key.jpg";
import ledPanel from "@/assets/materials/led-panel.jpg";
import junctionLidded from "@/assets/materials/junction-lidded.jpg";

import alemSteel from "@/assets/logos/alem-steel.png";
import dashen from "@/assets/logos/dashen-bank.png";
import dezacon from "@/assets/logos/dezacon.jpg";
import marriott from "@/assets/logos/marriott.png";
import minayeLogo from "@/assets/logos/minaye.png";
import moh from "@/assets/logos/ministry-of-health.webp";
import multichoice from "@/assets/logos/multichoice.svg";
import universal from "@/assets/logos/universal-construction.png";
import visa from "@/assets/logos/visa-ethiopia.png";
import yema from "@/assets/logos/yema-architecture.jpg";
import zias from "@/assets/logos/zias.jpg";
export { default as zbeLogo } from "@/assets/logos/zbe-logo.jpg";

export type Project = { title: string; img: StaticImageData };

export const PROJECTS: Project[] = [
  { title: "Smart Banking Branch", img: smartBanking },
  { title: "Forecourt & Landscape Lighting", img: forecourt },
  { title: "High-rise Tower", img: highRise },
  { title: "Office Building", img: office },
  { title: "Westin Addis Ababa", img: westin },
  // { title: "Cold Room Installation", img: coldRoom },
  { title: "Minaye Office Park", img: minaye },
];

/** Indexes into PROJECTS for the hero rotation. */
export const FEATURED = [0, 4, 5, 2] as const;

/** Hero wall columns (indexes into PROJECTS). */
export const WALL_A = [0, 2, 4] as const;
export const WALL_B = [1, 3, 5] as const;

export type Service = { title: string; text: string };

/** The six services, same order and descriptions as the live site. */
export const SERVICES: Service[] = [
  { title: "Comprehensive Electrical Solutions", text: "A full spectrum of services for your electrical needs, from installation to maintenance." },
  { title: "Custom PCB Design and Manufacturing", text: "Tailored electronic designs created to meet specific client requirements, delivered with our advanced manufacturing process." },
  { title: "ICT Infrastructure Development", text: "Expertise in building and developing robust ICT infrastructure for diverse applications." },
  { title: "Prototyping Services", text: "End-to-end prototyping and testing in our state-of-the-art electronics laboratory." },
  { title: "Consultation and Assessment", text: "Thorough assessments and consultations to ensure all electrical installations meet safety and efficiency standards." },
  { title: "24/7 Emergency Support", text: "Reliable emergency support for electrical issues at any time, ensuring your safety and peace of mind." },
];

export const CLIENTS: { name: string; logo: StaticImageData }[] = [
  { name: "Dashen Bank", logo: dashen },
  { name: "Ministry of Health – Ethiopia", logo: moh },
  { name: "Marriott International", logo: marriott },
  { name: "MultiChoice", logo: multichoice },
  { name: "VISA", logo: visa },
  { name: "Minaye Group", logo: minayeLogo },
  { name: "Universal Construction", logo: universal },
  { name: "ZIAS", logo: zias },
  { name: "Dezacon", logo: dezacon },
  { name: "Yema Architecture", logo: yema },
  { name: "Alem Steel", logo: alemSteel },
];

export const TESTIMONIALS = [
  { title: "Exceptional Service and Expertise", text: "The team at zbepowereng.com provided us with outstanding electrical installation systems. Their professionalism and attention to detail were evident throughout the project." },
  { title: "Innovative Solutions and Quality Work", text: "We partnered with zbepowereng for our ICT infrastructure, and they delivered reliable, state-of-the-art solutions that exceeded our expectations." },
  { title: "Highly Recommend for Custom Electronic Needs", text: "Their expertise in designing and manufacturing electronic PCB boards was invaluable to our project. We appreciated the bespoke service and high-quality results." },
] as const;

export type Material = { name: string; detail: string; img: StaticImageData };

/** Photographed stock. Names follow the company's list; prices are not published. */
export const MATERIALS: Material[] = [
  { name: "Electrical conduit", detail: "Rigid PVC conduit for protected cable runs. ZBE stocks 20 mm and 25 mm for building and site work in Addis Ababa.", img: conduit },
  { name: "Water pump", detail: "Self-priming peripheral pump, 370 W, with a copper-wound motor and brass impeller for domestic and site water supply.", img: waterPump },
  { name: "Aluminum ladder", detail: "Aluminum site ladder for overhead electrical, lighting and installation work. A 3.7 m flexible ladder is also supplied.", img: ladder },
  { name: "Romel socket", detail: "Romel switches and sockets for Ethiopian installations, including 2-pin and 3-pin outlets.", img: romelSocket },
  { name: "Corrugated conduit", detail: "Flexible corrugated conduit, known locally as gorroro, for cable runs that have to bend around structure.", img: corrugated },
  { name: "Electrical wire", detail: "Building wire on the coil for power and lighting circuits.", img: wire },
  { name: "Waterproof junction box", detail: "Sealed junction boxes for damp rooms and outdoor connections. The waterproof size in stock is 8×8.", img: junctionWaterproof },
  { name: "Safety vest", detail: "High-visibility vests for crews on electrical installation and construction sites.", img: safetyVest },
  { name: "8 m measuring tape", detail: "Eight-metre steel measuring tape for setting out conduit runs, ladder positions and installation lengths.", img: tape8m },
  { name: "T-handle allen key", detail: "T-handle hex wrench set, the T-alanki, for panels, switchgear and equipment fasteners.", img: tHandle },
  { name: "Junction box", detail: "Plastic junction boxes for splices and device mounting, stocked in 6×6, 8×8, 10×10, 10×15, 15×20 and 20×25.", img: junctionBox },
  { name: "Motion sensor", detail: "BTicino lighting-management sensor for automatic control of interior lighting.", img: motionSensor },
  { name: "Impact drill", detail: "710 W industrial impact drill for masonry and metal on electrical installation sites.", img: impactDrill },
  { name: "Torx key set", detail: "Nine-piece L-shaped Torx key set, stocked with the standard allen keys used on fittings and equipment.", img: torxKey },
  { name: "LED panel light", detail: "48 W LED panel for offices, shops and commercial interiors, with a one-year warranty.", img: ledPanel },
  { name: "Lidded junction box", detail: "Enclosed junction boxes with covers, for surface mounting where the splice needs to stay protected.", img: junctionLidded },
];

/** One description, reused in the page, metadata, and structured data. */
export const PROFILE =
  "ZBE Power Engineering is a power engineering company in Bole Sub City, Addis Ababa, Ethiopia. It carries out power engineering and electrical installation, electrical maintenance, and 24/7 emergency support, builds ICT infrastructure, designs and prototypes PCBs, and supplies electrical and construction materials for jobs across Ethiopia.";

export const FAQS = [
  {
    q: "Who does power engineering in Addis Ababa?",
    a: "ZBE Power Engineering is a power engineering company in Bole Sub City, Addis Ababa, Ethiopia. It designs and installs electrical systems, maintains them, builds ICT infrastructure, and supplies the materials used on the job. Call +251 911 488 066 or email sales@zbepowereng.com.",
  },
  {
    q: "Does ZBE Power Engineering do electrical maintenance in Ethiopia?",
    a: "Yes. Electrical maintenance is part of ZBE Power Engineering's work in Addis Ababa and for clients across Ethiopia, covering planned upkeep and 24/7 emergency support.",
  },
  {
    q: "Who installs electrical and ICT systems in Addis Ababa?",
    a: "ZBE Power Engineering installs electrical systems and ICT infrastructure in Addis Ababa. Its project work includes banks, hotels, offices, and high-rise buildings.",
  },
  {
    q: "Where can I buy electrical materials in Addis Ababa?",
    a: "ZBE Power Engineering supplies electrical and construction materials from Bole Sub City, Addis Ababa, for contractors and building owners across Ethiopia.",
  },
  {
    q: "Does ZBE install the materials as well as sell them?",
    a: "Yes. The same team that stocks conduit, cable, sockets, junction boxes, and site tools also installs electrical systems, maintains them, and builds ICT infrastructure.",
  },
  {
    q: "How do I contact ZBE for installation, maintenance, or materials?",
    a: "Call +251 911 488 066 or +251 988 488 066, or email sales@zbepowereng.com. ZBE Power Engineering is in Bole Sub City, Addis Ababa, Ethiopia. The website is https://zbepowereng.com.",
  },
] as const;

export const SITE = {
  name: "ZBE Power Engineering",
  url: "https://zbepowereng.com",
  tagline: "Power engineering, maintenance, and materials in Addis Ababa",
  description: PROFILE,
  email: "sales@zbepowereng.com",
  phones: [
    { label: "+251 911 488 066", href: "tel:+251911488066" },
    { label: "+251 988 488 066", href: "tel:+251988488066" },
  ],
  address: { street: "Bole Sub City", city: "Addis Ababa", country: "Ethiopia", countryCode: "ET" },
} as const;
