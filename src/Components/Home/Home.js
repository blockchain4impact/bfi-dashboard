import React from "react";
import Cards from "../Cards/Cards";
import "../Home/Home.css";

const cardData = [
  {
    id: 1,
    title: "BRI",
    items: [
      {
        id: 1,
        percentage: "12%",
        title:
          "To be recognized as an Indian Biomedical Innovation Ecosystem enabler",
        detail: "BFI is recognized as a key catalyst supporter for Biome",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 2,
        percentage: "100%",
        title:
          "Launch BFI-BIOME Network and discussions with Institutes and Incubators",
        detail: "Successful launch with 10+ EoI received",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 3,
        percentage: "58%",
        title: "Signing MoU with Insitutes and Incubators for BFI-BIOME",
        detail: "Signing of MoU(s) with 5+ Institute/Incubators",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 4,
        percentage: "0%",
        title: "Finalizing projects/programs and commencement of the projects/programs",
        detail: "Commencement of Projects/programs",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 5,
        percentage: "0%",
        title: "Periodic project/program review/evaluation",
        detail: "Review reports/results",
        names: ["Pooja", "Gaurav"],
      },
      {
        id: 6,
        percentage: "0%",
        title: "Annual Project/Program Review",
        detail: "Impact report",
        names: ["Pooja", "Gaurav"],
      },
    ],
  },
  {
    id: 2,
    title: "BIOME",
    items: [
      {
        id: 1,
        percentage: "25%",
        title: "Successful launch with 10+ Eol recieved",
        detail: "Discussions with Inst./Incubators",
        names: ["Girish", "Gaurav"],
      },
      {
        id: 2,
        percentage: "75%",
        title: "Signing of MoU(s) with 5+ Institute/Incubators",
        detail: "Finalize the list of Institutes/Incubators",
        names: ["Faraz", "Naga"],
      },
      {
        id: 2,
        percentage: "0%",
        title: "Commencement of Projects/programs",
        detail: "Shortlisting of projects/finalization of program",
        names: ["Girish", "Gaurav"],
      },
    ],
  },
  {
    id: 3,
    title: "ORG",
    items: [
      {
        id: 1,
        percentage: "75%",
        title: "Hiring: 3 members in BRI, 7 in IDFS and 2 in BFI Support roles",
        detail: "Complete interviews and Finalise Candidates - BRI",
        names: ["Pooja and Faraz", "Gaurav"],
      },
      {
        id: 2,
        percentage: "60%",
        title: "Clean audit with PWC",
        detail: "Interium Audit Report",
        names: ["Girish", "Gaurav"],
      },
      {
        id: 3,
        percentage: "75%",
        title: "Infrastructure",
        detail: "Öffice space",
        names: ["Team BFI", "Naga"],
      },
      {
        id: 4,
        percentage: "100%",
        title: "Hiring External Partners",
        detail: "The Madras Branding Company",
        names: ["Faraz", "Gaurav"],
      },
      {
        id: 5,
        percentage: "90%",
        title: "PR and Social Media Promotions",
        detail: "Brand Building",
        names: ["Faraz", "Naga"],
      },
      {
        id: 6,
        percentage: "50%",
        title: "Website updation",
        detail: "Visibility and Brand Building",
        names: ["Girish", "Naga"],
      },
      {
        id: 7,
        percentage: "25%",
        title: "Print Media Activities and PR",
        detail: "Goals and Milestones setting",
        names: ["Faraz", "Naga"],
      },
      {
        id: 8,
        percentage: "75%",
        title: "Dashboard creation",
        detail: "Goals and Milestones setting",
        names: ["Faraz", "Naga"],
      },
      {
        id: 9,
        percentage: "75%",
        title: "Procurements and Vendor Payments",
        detail: "Smooth operations",
        names: ["Faraz", "Naga"],
      },
      {
        id: 10,
        percentage: "16%",
        title: "Onboarding a Grant/ Project management platform",
        detail: "Streamlined Process and Documentation",
        names: ["Divyarth", "Naga"],
      },
      {
        id: 11,
        percentage: "75%",
        title: "Closure of projects under Crypto Relief",
        detail: "All relief projects are closed and audit is completed",
        names: ["Divyarth", "Naga"],
      },
    ],
  },
  {
    id: 4,
    title: "DFS",
    percentage: "75%",
    items: [
      {
        id: 1,
        percentage: "35%",
        title: "Hire core IDFS team",
        detail: "Complete interviews and Finalise Candidates",
        names: ["Ramnath", "Naga"],
      },
      {
        id: 2,
        percentage: "0%",
        title: "Launch HCD Fellowship",
        detail: "Complete Onboarding",
        names: ["VSR - Knowledge and Research Lead", "Naga"],
      },
      {
        id: 3,
        percentage: "20%",
        title: "Launch IHCR Fund",
        detail: "Onboarding the Partners Process",
        names: ["Ramnath", "Naga"],
      },
      {
        id: 4,
        percentage: "45%",
        title: "Regular Program Monitoring + Team Governance",
        detail: "Onboarding the Partners Process",
        names: ["Ramnath", "Naga"],
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="home">
      {cardData.map((card) => (
        <Cards key={card.id} data={card} />
      ))}
    </div>
  );
}
