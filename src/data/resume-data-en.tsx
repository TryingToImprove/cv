import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import TdcLogo from "../images/logos/tdc.svg";
import DanfossLogo from "../images/logos/danfoss.jpg";
import ParabolLogo from "../images/logos/tdc.svg";

export const RESUME_DATA = {
  headlines: {
    about: 'About me',
    work: "Work",
    edudcation: 'Education',
    expertice: 'Primary expertise'
  },
  name: "Oliver Lassen",
  initials: "OL",
  location: "Greater Copenhagen Area, Denmark",
  locationLink: undefined,
  about: "Full Stack developer with expertise in web using React",
  summary:
    "I have worked as a full stack developer on a wide range of projects. I learn quickly and can work both in teams and independently. My primary experience is in web development with React (NextJS and Remix) as well as backend development with NestJS. I have previously worked with C# (.NET), but later transitioned to TypeScript. I have many years of experience both as a consultant and as an employee.",
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
      badges: ["Consultant task"],
      title: "Frontend developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Consultant advising for the initiation of a new internal project as well as development. Technologies: Next (App Router), React, TypeScript, Lexical, Nx",
    },
    {
      company: "TDC Erhverv",
      link: "https://tdc.dk",
      badges: ["Consultant task"],
      title: "Full Stack developer",
      logo: TdcLogo,
      start: "2019",
      end: "2023",
      description:
        "Development of new projects for TDC Business customers, including portals for migration, onboarding, and subscription information. Technologies: Next (Pages Router), Remix, React, Java, Typescript, NestJS, SOAP, Sitecore, Postgres",
    },
    {
      company: "Danfoss",
      link: "https://danfoss.dk/",
      badges: ["Consultant task"],
      title: "Frontend .NET developer",
      logo: DanfossLogo,
      start: "2017",
      end: "2019",
      description:
        "Further development of internal prototype, as well as consulting.. Technologies: React, .NET (C#)",
    },
    {
      company: "Other",
      badges: [],
      title: "Developer",
      logo: DanfossLogo,
      start: "2013",
      end: "2017",
      description:
        "Other work for for ClickACrew, findroommate.dk, Interactify, HTML24. Technologies: KnockoutJS, jQuery, React, .NET (C#), Umbraco, mm.",
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
    "Webdevelopment",
    "Testing",
    ".NET",
    "C#",
  ],
  projects: [],
} as const;
