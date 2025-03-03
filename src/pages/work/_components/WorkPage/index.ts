import WorkPage from "./WorkPage.astro";
import WorkPageSection from "./WorkPageSection.astro";
import WorkPageSectionGrid from "./WorkPageSectionGrid.astro";
import WorkPageSectionTitle from "./WorkPageSectionTitle.astro";
import WorkPageExperienceCard from "./WorkPageExperienceCard.astro";
import WorkPageProjectCard from "./WorkPageProjectCard.astro";
import WorkPageSkillCard from "./WorkPageSkillCard.astro";
import WorkPageSkillCategoryCard from "./WorkPageSkillCategoryCard.astro";
import WorkPageResumeSkeleton from "./WorkPageResumeSkeleton.astro";

export default {
  Page: WorkPage,
  Section: WorkPageSection,
  SectionGrid: WorkPageSectionGrid,
  SectionTitle: WorkPageSectionTitle,
  ExperienceCard: WorkPageExperienceCard,
  ProjectCard: WorkPageProjectCard,
  SkillCard: WorkPageSkillCard,
  SkillCategoryCard: WorkPageSkillCategoryCard,
  ResumeSkeleton: WorkPageResumeSkeleton,
};
