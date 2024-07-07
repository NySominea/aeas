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

export const APP_NAME = "Australian Education Assessment Services";

export const APP_SHORT_NAME = "AEAS";

export const REGISTER_LINK =
  "https://events.aeas.com.au/mod/UserPortal/EventRegForm.cgi?ms=a98f707e88d7bac6fc0cdf6be6c6e4bc&NO_TOKEN=1&EventID=12";

export const BROCHURE_LINK = "";

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
    url: "#",
  },
  {
    name: "Canberra Grammar School",
    logo: logoCanberra,
    url: "#",
  },
  {
    name: "Elite College",
    logo: logoElite,
    url: "#",
  },
  {
    name: "Melbourne Girls Grammar",
    logo: logoMelbourne,
    url: "#",
  },
  {
    name: "Moreton Bay",
    logo: logoMoreton,
    url: "#",
  },
  {
    name: "PLC",
    logo: logoPlc,
    url: "#",
  },
  {
    name: "Scotch College",
    logo: logoScotch,
    url: "#",
  },
  {
    name: "St Stephen's School",
    logo: logoStephen,
    url: "#",
  },
  {
    name: "The Knox School",
    logo: logoKnox,
    url: "#",
  },
  {
    name: "Wesley Collede",
    logo: logoWesley,
    url: "#",
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
