import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vinzone from "@/public/vinzone.png";
import job from "@/public/job-portal.png";
import blog from "@/public/blog.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma In Computer Science",
    location: "Mohammadi Kheri, Uttar pradesh",
    description:
      "I completed My 3 years diploma in Computer Science and engineering from govt polytechnic Mohammadi Kheri.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Apprenticeship(Full Stack)",
    location: "Techpile Technology pvt ltd, Lucknow",
    description:
      "My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
] as const;

export const projectsData = [
  {
    title: "Vinzone",
    description:
      "I worked as a full-stack developer on this Project.This is amazon clone",
    tags: ["Next.js", "MongoDB", "Tailwind", "Prisma", "server-actions"],
    imageUrl: vinzone,
  },
  {
    title: "Job-Portal",
    description:
      " Job-Portal can help you find jobs,internships and new hires. ",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Prisma",
    ],
    imageUrl: job,
  },
  {
    title: "Blog App",
    description:
      "We can read and write Latest blogs. And search with the basis of categories",
    tags: ["React", "Next.js", "MongoDb", "CSS", "TypeScript", "nodejs"],
    imageUrl: blog,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux-ToolKit",
  "Express",
  "Framer Motion",
] as const;
