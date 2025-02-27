import { chatbooksWorkExperience } from "../experience/chatbooks/_chatbooksWorkExperience";
import { masterControlWorkExperience } from "../experience/master-control/_masterControlWorkExperience";
import { slingTvWorkExperience } from "../experience/sling-tv/_slingTvWorkExperience";
import type { Candidate } from "./_Candidate";

export const andrewHolbrookCandidate: Candidate = {
  name: "Andrew Holbrook",
  title: "Senior Frontend Engineer",
  email: "holz55@gmail.com",
  phone: "801.361.0417",
  summary:
    "Senior Software Engineer with 10+ years in front-end development. Specializes in React, Next.js, and Flutter, focusing on scalable, high-performance applications. Experienced in leading teams and driving product innovation.",
  workExperience: [
    chatbooksWorkExperience,
    slingTvWorkExperience,
    masterControlWorkExperience,
  ],
};
