import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Verhulst Grond- en Betonwerken | Snelheid, Nauwkeurigheid & Flexibiliteit",
  description: "Specialist in grond- en betonwerken, funderingen voor bedrijfsgebouwen en innovatieve technologie. Verhulst garandeert vakmanschap in Oostrozebeke en omstreken.",
  keywords: ["grondwerken", "betonwerken", "funderingen", "bedrijfsgebouwen", "Oostrozebeke", "Verhulst"],
  openGraph: {
    title: "Verhulst Grond- en Betonwerken",
    description: "Vakmanschap onder de oppervlakte. Specialist in industriële grond- en betonwerken.",
    type: "website",
    locale: "nl_BE",
    url: "https://www.grondwerkenverhulst.be/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Verhulst Grond- en Betonwerken Bv",
    "image": "https://www.grondwerkenverhulst.be/images/logo-verhulst-grond-en-betonwerken-white.png",
    "@id": "https://www.grondwerkenverhulst.be",
    "url": "https://www.grondwerkenverhulst.be",
    "telephone": "+32474748141",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Merelstraat 20",
      "addressLocality": "Oostrozebeke",
      "postalCode": "8780",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.927541,
      "longitude": 3.340843
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/verhulst-grond-en-betonwerken/"
    ]
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "ConstructionServices",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Verhulst Grond- en Betonwerken Bv"
    },
    "areaServed": {
      "@type": "State",
      "name": "Vlaanderen"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Bouwdiensten",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grondwerken"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Betonwerken"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Funderingswerken"
          }
        }
      ]
    }
  };

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
