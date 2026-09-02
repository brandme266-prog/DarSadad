import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حاسبة القرض الحسن | تمويل إسلامي بدون فوائد - نجد السداد",
  description: "أداة مجانية لحساب أقساط القرض الحسن (بدون أي فوائد أو أرباح) في السعودية. اعرف قسطك الشهري والراتب المطلوب لتمويلك الإسلامي النقي في ثوانٍ مع نجد السداد.",
  keywords: [
    "قرض حسن",
    "تمويل بدون فوائد",
    "حاسبة تمويل إسلامي",
    "قرض بدون أرباح",
    "حساب القسط الشهري",
    "قرض حسن السعودية",
    "تمويل شخصي إسلامي",
    "حاسبة القروض السعودية",
    "تمويل نقي",
    "نجد السداد للقروض الحسنة"
  ],
  alternates: {
    canonical: "https://brand1me.com/hasiba",
  },
  openGraph: {
    title: "حاسبة القرض الحسن | تمويل إسلامي بدون فوائد - نجد السداد",
    description: "أداة مجانية لحساب أقساط القرض الحسن (بدون أي فوائد) في السعودية. اعرف قسطك الشهري والراتب المطلوب لتمويلك في ثوانٍ.",
    url: "https://brand1me.com/hasiba",
    type: "website",
    images: [
      {
        url: "https://brand1me.com/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "حاسبة القرض الحسن من نجد السداد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "حاسبة القرض الحسن | تمويل إسلامي بدون فوائد",
    description: "أداة مجانية لحساب أقساط القرض الحسن (بدون أي فوائد أو أرباح) في السعودية.",
    images: ["https://brand1me.com/images/hero-banner.jpg"],
  },
};

export default function HasibaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
