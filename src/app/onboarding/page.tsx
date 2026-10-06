import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

export const metadata: Metadata = {
  title: "Think4Ever - Customer Onboarding",
  description: "Complete step-by-step customer onboarding guide for Think4Ever platform.",
  openGraph: {
    title: "Think4Ever - Customer Onboarding",
    description: "Complete step-by-step customer onboarding guide for Think4Ever platform.",
    url: "https://think4ever.com/docs/onboarding",
    siteName: "Think4Ever Documentation",
    images: [
      {
        url: "https://think4ever.com/docs/images/og-image.jpg",
        width: 1080,
        height: 1081,
        alt: "Think4Ever - Customer Onboarding",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Think4Ever - Customer Onboarding",
    description: "Complete step-by-step customer onboarding guide for Think4Ever platform.",
    images: ["https://think4ever.com/docs/images/og-image.jpg"],
  },
};

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
