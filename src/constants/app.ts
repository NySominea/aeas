import {
  Date,
  Facebook,
  Instagram,
  LinkedIn,
  Map,
  Time,
  Web,
} from "@components/ui/icons";
import logoBeaconhill from "assets/schools/beaconhill.jpg";
import logoCanberra from "assets/schools/canberra.jpg";
import logoElite from "assets/schools/elite.jpg";
import logoKnox from "assets/schools/knox.jpg";
import logoMelbourne from "assets/schools/melbourne.jpg";
import logoMoreton from "assets/schools/moreton.jpg";
import logoPlc from "assets/schools/plc.jpg";
import logoScotch from "assets/schools/scotch.jpg";
import logoStephen from "assets/schools/stephen.jpg";
import logoWesley from "assets/schools/wesley.jpg";
import logoSpringBoard from "assets/partners/springboard.jpeg";
import logoWeduAbroad from "assets/partners/weduabroad.jpeg";

export const APP_NAME = "Australian Education Assessment Services";

export const APP_SHORT_NAME = "AEAS";

export const REGISTER_LINK =
  "https://events.aeas.com.au/mod/UserPortal/EventRegForm.cgi?ms=a98f707e88d7bac6fc0cdf6be6c6e4bc&NO_TOKEN=1&EventID=12";

export const BROCHURE_LINK = "https://exhibitions.aeas.com.au/wp-content/uploads/2024/07/2024-Cambodia-Exhibition-Event-Info-A4-Brochure-Soon.jpg";

export const EXHIBITION_DAY = {
  date: {
    title: "exhibition.date",
    icon: Date,
  },
  time: {
    title: "exhibition.time",
    icon: Time,
  },
  location: {
    title: "exhibition.location",
    icon: Map,
  },
};

export const SCHOOLS = [
  {
    name: "Beaconhills Colledge",
    logo: logoBeaconhill,
    url: "https://exhibitions.aeas.com.au/beaconhills-college-vic_kh-sept24/",
  },
  {
    name: "Canberra Grammar School",
    logo: logoCanberra,
    url: "https://exhibitions.aeas.com.au/canberra-grammar-act_kh-sept24/",
  },
  {
    name: "Elite College",
    logo: logoElite,
    url: "https://exhibitions.aeas.com.au/elite-college-of-english-nsw_kh-sept24/",
  },
  {
    name: "Melbourne Girls Grammar",
    logo: logoMelbourne,
    url: "https://exhibitions.aeas.com.au/melbourne-girls-grammar-vic_kh-sept24/",
  },
  {
    name: "Moreton Bay",
    logo: logoMoreton,
    url: "https://exhibitions.aeas.com.au/moreton-bay-colleges-qld_kh-sept24/",
  },
  {
    name: "PLC",
    logo: logoPlc,
    url: "https://exhibitions.aeas.com.au/plc-sydney-nsw_kh-sept24/",
  },
  {
    name: "Scotch College",
    logo: logoScotch,
    url: "https://exhibitions.aeas.com.au/scotch-college-melbourne-vic_kh-sept24/",
  },
  {
    name: "St Stephen's School",
    logo: logoStephen,
    url: "https://exhibitions.aeas.com.au/st-stephens-school-wa_kh-sept24/",
  },
  {
    name: "The Knox School",
    logo: logoKnox,
    url: "https://exhibitions.aeas.com.au/the-knox-school-vic_kh-sept24/",
  },
  {
    name: "Wesley Collede",
    logo: logoWesley,
    url: "https://exhibitions.aeas.com.au/wesley-college-melbourne-vic_kh-sept24",
  },
];

export const PARTNERS = [
  {
    logo: logoSpringBoard,
    name: "SpringBoard4Education",
    address:
      "SpringBoard House N.6, Street 574, Boeung Kak II, Toul Kork, Phnom Penh, Cambodia",
    mapUrl: "https://maps.app.goo.gl/spaaLvAXEBM2Ybfy6",
    phone: "+855 15 961 861",
    email: "info@springboard4education.com",
    website: "www.springboard4education.com",
    url: "https://www.springboard4education.com/",
  },
  {
    logo: logoWeduAbroad,
    name: "WEduAbroad",
    address:
      "38th Floor, Unit G38 (via Sky Lobby), Garden In the Air (GIA) Tower, Sopheak Mongkol Street, Diamond Island, Sangkat Tonle Bassac, Khan Chamkarmorn, Phnom Penh, Cambodia",
    mapUrl: "https://maps.app.goo.gl/aa8Q5bFRcxe8cSoP9",
    phone: "+855 17 548 354",
    email: "info@weduabroad.com",
    website: "www.weduabroad.com",
    url: "http://weduabroad.com/",
  },
];

export const FOOTER_LINKS = [
  {
    title: "AEAS Cambodia",
    icon: Facebook,
    url: "https://www.facebook.com/AEASCambodia",
  },
  {
    title: "@aeas_test",
    icon: Instagram,
    url: "https://www.instagram.com/aeas_test/",
  },
  {
    title: "AEAS",
    icon: LinkedIn,
    url: "https://www.linkedin.com/company/aeas-test/",
  },
  {
    title: "aeas.com.au",
    icon: Web,
    url: "https://www.aeas.com.au/",
  },
];
