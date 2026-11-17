import Clients from "@/components/Clients";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import Services from "@/components/Services";
import { FAQS, MATERIALS, PROFILE, SERVICES, SITE, zbeLogo } from "@/data/content";

const businessId = `${SITE.url}/#business`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Electrician", "Store"],
      "@id": businessId,
      name: SITE.name,
      alternateName: ["ZBE", "zbepowereng", "ZBE Power Eng"],
      url: SITE.url,
      description: PROFILE,
      slogan: SITE.tagline,
      email: SITE.email,
      telephone: SITE.phones[0].label.replace(/\s/g, ""),
      logo: `${SITE.url}${zbeLogo.src}`,
      image: `${SITE.url}${zbeLogo.src}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.countryCode,
      },
      areaServed: [
        { "@type": "City", name: "Addis Ababa" },
        { "@type": "Country", name: "Ethiopia" },
      ],
      knowsAbout: [
        "Power engineering",
        "Electrical installation",
        "Electrical maintenance",
        "Emergency electrical support",
        "ICT infrastructure",
        "PCB design",
        "Electrical conduit",
        "Junction boxes",
        "Building wire",
        "Construction materials",
      ],
      contactPoint: SITE.phones.map((p) => ({
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: p.label.replace(/\s/g, ""),
        email: SITE.email,
        areaServed: "ET",
        availableLanguage: "English",
      })),
      hasOfferCatalog: [
        {
          "@type": "OfferCatalog",
          name: "Power engineering services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Power engineering", description: "Power engineering for buildings and sites in Addis Ababa and across Ethiopia.", provider: { "@id": businessId } }, areaServed: "Addis Ababa, Ethiopia" },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical maintenance", description: "Electrical maintenance and 24/7 emergency support in Addis Ababa, Ethiopia.", provider: { "@id": businessId } }, areaServed: "Addis Ababa, Ethiopia" },
            ...SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text, provider: { "@id": businessId } },
            areaServed: "Addis Ababa, Ethiopia",
          })),
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Electrical and construction materials",
          itemListElement: MATERIALS.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: item.name,
              description: item.detail,
              category: "Electrical and construction materials",
            },
            areaServed: "Addis Ababa, Ethiopia",
            seller: { "@id": businessId },
          })),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Cursor />
      <Hero />

      <main id="main" className="px-2 lg:px-3.5">
        <section className="px-[clamp(8px,2vw,28px)] pt-[clamp(72px,10vw,150px)] pb-10" id="gallery" aria-labelledby="gallery-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)]">
            <h2 id="gallery-title" className="display display-xl">Our work</h2>
          </div>
          <Gallery />
        </section>

        <section className="mt-[60px] rounded-panel bg-tint px-[clamp(20px,4vw,56px)] pt-[clamp(72px,10vw,150px)] pb-[clamp(60px,8vw,120px)]" id="services" aria-labelledby="services-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)] max-w-[820px]">
            <h2 id="services-title" className="display display-xl">What we do</h2>
            <p className="mt-6 text-lg leading-[1.55] text-soft">{PROFILE}</p>
          </div>
          <Services />
        </section>

        <section className="px-[clamp(8px,2vw,28px)] pt-[clamp(72px,10vw,150px)] pb-10" id="materials" aria-labelledby="materials-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)] max-w-[760px]">
            <h2 id="materials-title" className="display display-xl">Materials</h2>
            <p className="mt-6 text-lg leading-[1.55] text-soft">
              ZBE Power Engineering supplies electrical and construction materials in Addis Ababa, and installs them.
              In stock: 20&nbsp;mm and 25&nbsp;mm conduit, gorroro conduit, junction boxes, Romel and Schuko sockets,
              building wire, a water pump, ladders, safety vests, motion sensors, Fisher plugs, spacers, screws and site tools.
            </p>
          </div>
          <Materials />
        </section>

        <section className="px-[clamp(8px,2vw,28px)] pt-[clamp(72px,10vw,150px)] pb-4" id="questions" aria-labelledby="questions-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)]">
            <h2 id="questions-title" className="display display-xl">Questions</h2>
          </div>
          <div className="grid gap-2.5 lg:grid-cols-3">
            {FAQS.map((item) => (
              <article key={item.q} className="reveal rounded-card bg-panel px-[26px] pt-7 pb-[30px]">
                <h3 className="mb-3 font-display text-xl leading-[1.2] font-bold tracking-normal">{item.q}</h3>
                <p className="text-soft">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-auto px-[clamp(8px,2vw,28px)] pt-[clamp(72px,10vw,150px)] pb-10 [contain-intrinsic-size:auto_1500px]" id="clients" aria-labelledby="clients-title">
          <div className="reveal mb-[clamp(28px,4vw,56px)] max-w-[820px]">
            <h2 id="clients-title" className="display display-xl">Trusted by</h2>
            <p className="mt-6 text-lg leading-[1.55] text-soft">
              ZBE Power Engineering has done electrical and ICT work in Addis Ababa for Dashen Bank, the Ministry of Health of Ethiopia, Marriott, MultiChoice, VISA, Minaye Group, Universal Construction, and other building clients.
            </p>
          </div>
          <Clients />
        </section>
      </main>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
