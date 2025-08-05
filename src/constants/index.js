import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  mysql,
  git,
  html,
  vscode,
  microsoft_excel,
  eclipse,
  sapabap,
  sapbtp,
  project2,
  project3,
  emeLogo,
  genzeeLogo,
  pacelabLogo,
  youtubeclone,
  airbnbclone,
  spotifyclone,
  plant,
  koblenz,
} from "../assets";

// ✅ New technology icon imports
import word from "../assets/tech/word.png";
import confluence from "../assets/tech/confluence.png";
import gitlab from "../assets/tech/gitlab.png";
import kubernetes from "../assets/tech/kubernetes.png";
import _365 from "../assets/tech/365.png";
import googleanalytics from "../assets/tech/googleanalytics.png";
import tableau from "../assets/tech/tableau.png";
import bi from "../assets/tech/bi.png";
import neo4j from "../assets/tech/neo4j.png";
import sqlserver from "../assets/tech/sqlserver.png";
import msaccess from "../assets/tech/msaccess.png";
import cloud from "../assets/tech/cloud.png";
import azure from "../assets/tech/azure.png";
import apache from "../assets/tech/apache.png";
import plotly from "../assets/tech/plotly.png";
import matplot from "../assets/tech/matplot.png";
import scipy from "../assets/tech/scipy.png";
import pytorch from "../assets/tech/pytorch.png";
import scikit from "../assets/tech/scikit.png";
import tensorflow from "../assets/tech/tensorflow.png";
import r from "../assets/tech/r.png";
import pandas from "../assets/tech/pandas.png";

// ✅ Newly added
import aws from "../assets/tech/aws.png";
import docker from "../assets/tech/docker.png";
import mongodb from "../assets/tech/mongodb.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work Experience" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Data Analyst", icon: backend },
  { title: "Data Scientist", icon: web },
  { title: "Software Developer", icon: mobile },
  { title: "IT Consultant", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "MySQL", icon: mysql },
  { name: "SAP ABAP", icon: sapabap },
  { name: "SAP BTP", icon: sapbtp },
  { name: "Microsoft Excel", icon: microsoft_excel },
  { name: "Eclipse IDE", icon: eclipse },
  { name: "VS Code", icon: vscode },

  // ✅ New technologies
  { name: "Microsoft Word", icon: word },
  { name: "Confluence", icon: confluence },
  { name: "GitLab", icon: gitlab },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Microsoft 365", icon: _365 },
  { name: "Google Analytics", icon: googleanalytics },
  { name: "Tableau", icon: tableau },
  { name: "Power BI", icon: bi },
  { name: "Neo4j", icon: neo4j },
  { name: "SQL Server", icon: sqlserver },
  { name: "MS Access", icon: msaccess },
  { name: "Google Cloud", icon: cloud },
  { name: "Microsoft Azure", icon: azure },
  { name: "Apache Spark", icon: apache },
  { name: "Plotly", icon: plotly },
  { name: "Matplotlib", icon: matplot },
  { name: "Scipy", icon: scipy },
  { name: "PyTorch", icon: pytorch },
  { name: "Scikit-learn", icon: scikit },
  { name: "TensorFlow", icon: tensorflow },
  { name: "R", icon: r },
  { name: "Pandas", icon: pandas },

  // ✅ Newly added
  { name: "AWS", icon: aws },
  { name: "Docker", icon: docker },
  { name: "MongoDB", icon: mongodb },
];

const experiences = [
  {

    title: "FC Associate I, L1",
    company_name: "Amazon Kaiserslautern GmbH",
    icon: emeLogo,
    iconBg: "#383E56",
    date: "April 2025 – Present",
    points: [
      "Resolved operational and inventory issues using root cause analysis.",
      "Maintained fulfillment center KPIs through continuous process monitoring.",
      "Identified and escalated data discrepancies impacting stock and operations.",
      "Supported data-related audits and process checks.",
    ],
  },
  {
    title: "Applied Data Scientist (Working Student)",
    company_name: "Phinc GmbH",
    icon: genzeeLogo,
    iconBg: "#E6DEDD",
    date: "Mar 2023 – Sep 2023",
    points: [
      "Designed ETL pipelines for manufacturing data extraction and processing.",
      "Automated Excel-based reports into dynamic Power BI dashboards using DAX.",
      "Built real-time data processing workflows with Python and SQL.",
      "Reduced reporting delivery time by 50% through workflow optimization.",
      "Collaborated with cross-functional teams on data anomaly detection.",
      "Tools: Python, SQL, Azure, AWS, Docker, Spark.",
    ],
  },
  {
    title: "Co-founder & Data Analyst",
    company_name: "Adnixpro, Kerala",
    icon: pacelabLogo,
    iconBg: "#383E56",
    date: "May 2016 – Mar 2021",
    points: [
      "Developed ML models for sales forecasts, improving accuracy by 35%.",
      "Automated inventory reporting with Excel macros and trend dashboards.",
      "Analysed customer behaviour patterns to optimize service offerings.",
      "Led business decisions based on real-time KPI dashboards.",
      "Managed financial reports and client metrics.",
    ],
  },
  {
    title: "Research & Teaching Assistant",
    company_name: "University of Koblenz",
    icon: koblenz,
    iconBg: "#E6DEDD",
    date: "Nov 2022 – Feb 2023",
    points: [
      "Mentored 200+ students in Python, R, and data visualization techniques.",
      "Designed lecture content on data wrangling, text mining, and cloud services.",
      "Evaluated student progress and provided feedback on assignments.",
      "Assisted professors in delivering applied data science content.",
    ],
  },
  {
    title: "Research Internship – AI-NET-PROTECT",
    company_name: "University of Koblenz",
    icon: koblenz,
    iconBg: "#E6DEDD",
    date: "Oct 2022 – Mar 2023",
    points: [
      "Contributed to ML-based health prediction app using Angular.",
      "Improved system response time by 30% with better data validation.",
      "Applied data quality checks and usability metrics.",
      "Designed UI layouts with faster rendering and cleaner data flows.",
    ],
  },
];


const publicationAndResume = {
  publication: {
    title: "📄 Published Conference Paper: CampusTrace",
    description:
      "CampusTrace transforms the systems of lost and found items in campus environments by improving the process of reporting lost or found items and ensures the proper returns of the item to its rightful owners. The system encourages cooperation, protects privacy, and improves recovery through a user-friendly experience.",
    link: "https://irojournals.com/tcsst/article/view/6/2/6",
  },
  resume: {
    title: "📂 Download My Resume",
    link: "/abhiram_resume.pdf",
  },
};

export {
  services,
  technologies,
  experiences,
  publicationAndResume,
};
