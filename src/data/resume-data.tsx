import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import TdcLogo from "../images/logos/tdc.svg";
import DanfossLogo from "../images/logos/danfoss.jpg";
import ParabolLogo from "../images/logos/tdc.svg";

export const RESUME_DATA = {
  name: "Oliver Lassen",
  initials: "OL",
  location: "Storkøbenhavn, Danmark",
  locationLink: undefined,
  about: "Full Stack udvikler med ekspertise indenfor webudvikling med React",
  summary:
    "Jeg har som full stack udvikler arbejdet med bred karm af projekter. Jeg lærer hurtigt og kan arbejde i både teams og selvstændigt. Mine primære erfaring er webudvikling med React (NextJS og Remix) samt backendudvikling med NestJS. Jeg har tidligere arbejdet med C# (.NET), men har senere hen skiftet til TypeScript. Jeg har mange års erfaring både som konsulent og som medarbejder.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1690457?v=4",
  personalWebsiteUrl: undefined,
  contact: {
    email: "privat.oliver.lassen@gmail.com",
    tel: "+4527150869",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/TryingToImprove",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oliverleolassen/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "CPH Business",
      degree: "Datamatiker",
      start: "2014",
      end: "2017",
    },
    {
      school: "Roskilde Tekniske Skole",
      degree: "Webintegrator",
      start: "2011",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Dansk Industri",
      link: "https://di.dk",
      badges: ["Konsulentopgave"],
      title: "Frontend udvikler",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Konsulentrådgivning til opstart af nyt internt projekt samt udvikling. Teknologier: Next (App Router), React, TypeScript, Lexical, Nx",
    },
    {
      company: "TDC Erhverv",
      link: "https://tdc.dk",
      badges: ["Konsulentopgave"],
      title: "Full Stack udvikler",
      logo: TdcLogo,
      start: "2019",
      end: "2023",
      description:
        "Udvikling af nye projekter for TDC Erhvervs kunder, heriblandt portaler for migrering, onboarding og abonnementoplysninger. Teknologier: Next (Pages Router), Remix, React, Java, Typescript, NestJS, SOAP, Sitecore, Postgres",
    },
    {
      company: "Danfoss",
      link: "https://danfoss.dk/",
      badges: ["Konsulentopgave"],
      title: "Frontend .NET udvikler",
      logo: DanfossLogo,
      start: "2017",
      end: "2019",
      description:
        "Videreudvikling af internt prototype, samt rådgivining. Teknologier: React, .NET (C#)",
    },
    {
      company: "Andet",
      badges: [],
      title: "Webudvikler",
      logo: DanfossLogo,
      start: "2013",
      end: "2017",
      description:
        "Andet arbejdet for ClickACrew, findroommate.dk, Interactify, HTML24. Teknologier: KnockoutJS, jQuery, React, .NET (C#), Umbraco, mm.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "Node.js",
    "NestJS",
    "Webudvikling",
    "Testing",
    ".NET",
    "C#",
  ],
  projects: [],
} as const;
