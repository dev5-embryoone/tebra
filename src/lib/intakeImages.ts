/**
 * Map logical keys from theIntakePage data to imported asset URLs.
 */
import ceoHero from "../assets/Arjun-scaled-e1761674709694.webp?url";
import therapy from "../assets/patient-experience.webp?url";
import newsletter from "../assets/Webinar-listing-resources-page-412x264-min.png?url";
import chatgpt from "../assets/LP-Campaign-Supporting-Asset-Hero-560x560234-1.png?url";
import aiNews from "../assets/LP-Campaign-Photo-Carousel-Image-1200x1080-1.png?url";
import fullscript from "../assets/PATIEN-EXPERIENCE-min.webp?url";
import ehrPlus from "../assets/EHR-min.webp?url";
import billingClients from "../assets/BILLING-SOFTWARE-min.webp?url";
import aiScribes from "../assets/Product-Graphic@2x-768x768.webp?url";
import marchMarketing from "../assets/medical-practice-marketing-min.webp?url";
import personalization from "../assets/Build-trust.webp?url";
import billingCompany from "../assets/BILLING-Hub-Billing-cos.webp?url";
import vitalSigns from "../assets/Webinar-listing-resources-page-412x264-min.png?url";
import rcmBacklog from "../assets/billing.webp?url";
import digitalPay from "../assets/payments.webp?url";
import medicareRule from "../assets/Hero-2-scaled-v2.jpg?url";
import aiTrust from "../assets/ehrpage.webp?url";
import burnoutWomen from "../assets/DEI-hero-1.jpg?url";
import aiDocs from "../assets/Hero-graphics-1.webp?url";
import aiHoldback from "../assets/Challenge-Solution-Results_1112x1112.webp?url";
import chooseDoctor from "../assets/LP-Campaign-Supporting-Asset-Hero-560x560234-1.png?url";
import chatgptCare from "../assets/marketing.webp?url";
import erBurnout from "../assets/Banner-1-768x768.jpg?url";
import cardioBurnout from "../assets/Colin-Morris.jpg?url";
import resource1 from "../assets/about.webp?url";
import resource2 from "../assets/Simplify-operations.png?url";
import resource3 from "../assets/Challenge-Solution-Results_1112x1112.webp?url";
import videoThumb from "../assets/thumbnail-w412-h264_x2_LP_-min.png?url";
import cigna from "../assets/BILLING-Hub-In-house-billers.webp?url";

export const intakeImageMap: Record<string, string> = {
  ceoHero,
  therapy,
  newsletter,
  chatgpt,
  aiNews,
  fullscript,
  ehrPlus,
  billingClients,
  aiScribes,
  marchMarketing,
  personalization,
  billingCompany,
  vitalSigns,
  rcmBacklog,
  digitalPay,
  medicareRule,
  aiTrust,
  burnoutWomen,
  aiDocs,
  aiHoldback,
  chooseDoctor,
  chatgptCare,
  erBurnout,
  cardioBurnout,
  resource1,
  resource2,
  resource3,
  videoThumb,
  cigna,
};

export function intakeImage(key: string): string {
  return intakeImageMap[key] ?? aiNews;
}
