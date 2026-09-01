import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const almarai = Almarai({
  weight: ["300", "400", "700"],
  subsets: ["arabic"],
  variable: "--font-almarai",
  display: "swap",
});

const siteUrl = "https://brand1me.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "شركة نجد السداد للحلول المالية والتطوير العقاري | تمويل شخصي وعقاري",
    template: "%s | نجد السداد للحلول المالية",
  },
  description: "نجد السداد: خيارك الأول في الرياض للتمويل الشخصي والعقاري. نوفر لك سيولة حتى مليون ريال، سداد المتعثرات، وتحصيل ديون الشركات باحترافية وفي أسرع وقت.",
  keywords: [
    "تمويل شخصي الرياض", "تمويل عقاري الرياض", "سداد تعثرات الرياض",
    "تحصيل ديون الرياض", "تحسين سمة الرياض", "نجد السداد",
    "تمويل شخصي بدون كفيل", "تمويل عقاري بدون دفعة أولى",
    "تسوية ديون بنكية", "إعادة جدولة قروض", "سيولة فورية الرياض",
    "تمويل موظفين حكوميين", "تمويل قطاع خاص", "تمويل متقاعدين",
    "شركة تحصيل ديون السعودية", "تمويل شخصي جدة", "تمويل شخصي الدمام",
    "خدمات سمة", "استشارات مالية الرياض", "حلول مالية السعودية"
  ],
  authors: [{ name: "شركة نجد السداد للحلول المالية والتطوير العقاري", url: siteUrl }],
  creator: "شركة نجد السداد",
  publisher: "شركة نجد السداد للحلول المالية والتطوير العقاري",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: "شركة نجد السداد للحلول المالية والتطوير العقاري",
    title: "شركة نجد السداد للحلول المالية والتطوير العقاري",
    description: "خيارك الأول في الرياض للتمويل الشخصي والعقاري وسداد المتعثرات. نوفر لك سيولة فورية بأفضل الشروط.",
    images: [{ url: "https://brand1me.com/images/hero-banner.jpg", width: 1200, height: 630, alt: "نجد السداد للحلول المالية" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة نجد السداد للحلول المالية والتطوير العقاري",
    description: "خيارك الأول في الرياض للتمويل الشخصي والعقاري وسداد المتعثرات. نوفر لك سيولة فورية بأفضل الشروط.",
    images: ["https://brand1me.com/images/hero-banner.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

// JSON-LD Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "FinancialService"],
  "@id": `${siteUrl}/#organization`,
  name: "نجد السداد للحلول المالية والتطوير العقاري",
  alternateName: ["Najd Al Sedad", "نجد السداد"],
  url: siteUrl,
  logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.png`, width: 200, height: 200 },
  image: `${siteUrl}/images/hero-banner.jpg`,
  description: "شركة نجد السداد للحلول المالية والتطوير العقاري بالرياض، متخصصون في التمويل الشخصي والعقاري وسداد التعثرات وتحصيل الديون وخدمات تحسين السجل الائتماني في سمة.",
  telephone: "00966570856657",
  email: "info@brand1me.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "الرياض، حي المهدية، السيل الكبير",
    addressLocality: "الرياض",
    addressRegion: "الرياض",
    postalCode: "14931",
    addressCountry: "SA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 24.7136, longitude: 46.6753 },
  areaServed: [
    { "@type": "City", name: "الرياض" }, { "@type": "City", name: "جدة" },
    { "@type": "City", name: "مكة المكرمة" }, { "@type": "City", name: "الدمام" },
    { "@type": "City", name: "الخبر" }, { "@type": "City", name: "الطائف" },
    { "@type": "City", name: "المدينة المنورة" }, { "@type": "Country", name: "المملكة العربية السعودية" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات نجد السداد المالية",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "FinancialProduct", name: "تمويل شخصي حتى مليون ريال" } },
      { "@type": "Offer", itemOffered: { "@type": "FinancialProduct", name: "تمويل عقاري بدون دفعة أولى" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "سداد التعثرات البنكية وإعادة الجدولة" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "تحصيل ديون الشركات والمؤسسات" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "تحسين السجل الائتماني في سمة" } },
    ],
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday"], opens: "08:00", closes: "22:00" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "00966570856657",
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: "Arabic",
    contactOption: "TollFree",
  },
  sameAs: [
    "https://wa.me/00966570856657",
    `${siteUrl}`,
  ],
  identifier: [
    { "@type": "PropertyValue", name: "رقم السجل التجاري", value: "1010852488" },
    { "@type": "PropertyValue", name: "الرقم الضريبي", value: "311520029500003" },
    { "@type": "PropertyValue", name: "عضوية الغرفة التجارية", value: "805713" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "نجد السداد للحلول المالية والتطوير العقاري",
  description: "الموقع الرسمي لشركة نجد السداد للحلول المالية والتطوير العقاري بالرياض",
  publisher: { "@id": `${siteUrl}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "ar-SA",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "خدماتنا", item: `${siteUrl}/services` },
    { "@type": "ListItem", position: 3, name: "المقالات", item: `${siteUrl}/blog` },
    { "@type": "ListItem", position: 4, name: "اتصل بنا", item: `${siteUrl}/contact` },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable} h-full antialiased font-sans`}>
      <head>
        <meta name="geo.region" content="SA-01" />
        <meta name="geo.placename" content="الرياض، المملكة العربية السعودية" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        <meta name="language" content="Arabic" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-700 font-light selection:bg-saddad-gold/20 selection:text-saddad-blue">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
