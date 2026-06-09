import { C } from "../styles/tokens";

import bricklyHome     from "../assets/brickly/homepage.png";
import bricklyAgent    from "../assets/brickly/agent.png";
import bricklyProperty from "../assets/brickly/property-details.png";

import jobhubHome      from "../assets/jobhub/homepage.png";
import jobhubJobs      from "../assets/jobhub/job-listings.png";
import jobhubRecruiter from "../assets/jobhub/recruiter-dashboard.png";

export const PROJECTS = [
  {
    slug: "brickly",
    name: "Brickly",
    screenshots: [
      { src: bricklyHome,     label: "Homepage" },
      { src: bricklyAgent,    label: "Agent Dashboard" },
      { src: bricklyProperty, label: "Property Details" },
    ],
    tagline: "Where properties find their people.",
    category: "Real Estate Platform",
    year: "2024",
    desc: "A full-stack real estate platform built for all three sides — users browsing listings, agents managing properties, admins controlling the platform. JWT-secured role-based access, property search & filtering, wishlists, and a dedicated agent dashboard.",
    challenge: "Keeping the frontend perfectly in sync with the backend was the core challenge — especially the agent dashboard, where property status changes needed to reflect instantly across multiple views.",
    features: [
      "User · Agent · Admin roles",
      "Role-based access control",
      "Property listing & management",
      "Wishlist functionality",
      "Agent dashboard",
      "Search & filtering",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://real-estate-website00.netlify.app/",
    fe:   "https://github.com/akhilacodesss/real-estate-website-fe",
    be:   "https://github.com/akhilacodesss/real-estate-website-be",
    featured: true,
    palette: { bg: C.paper, accent: C.copper },
    isDark: false,
  },
  {
    slug: "jobhub",
    name: "JobHub",
    screenshots: [
      { src: jobhubHome,      label: "Homepage" },
      { src: jobhubJobs,      label: "Job Listings" },
      { src: jobhubRecruiter, label: "Recruiter Dashboard" },
    ],
    tagline: "Connecting talent with opportunity.",
    category: "Job Portal",
    year: "2024",
    desc: "A full-stack job portal connecting job seekers and recruiters through a clean application and management workflow. JWT authentication, admin dashboards, job search with filters, and messaging.",
    challenge: "Designing one codebase that serves two completely different user types — job seeker and recruiter — without ever feeling like two apps stitched together.",
    features: [
      "Job search & filtering",
      "Application system",
      "User & Admin workflows",
      "Admin dashboard",
      "Contact & messaging",
      "Responsive design",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://j0bhubb.netlify.app/",
    fe:   "https://github.com/akhilacodesss/job-portal-fe",
    be:   "https://github.com/akhilacodesss/job-portal-be",
    featured: false,
    palette: { bg: C.deep, accent: C.rose },
    isDark: true,
  },
];