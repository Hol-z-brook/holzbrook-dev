import { test, expect } from '@playwright/test';

test('work page has correct title', async ({ page }) => {
  await page.goto('/work');
  await expect(page).toHaveTitle('Portfolio & Expertise');
  const heroSection = page.getByTestId('work-hero');
  await expect(heroSection.getByRole('heading', { level: 1 })).toBeVisible();
});

test('work page displays all sections', async ({ page }) => {
  await page.goto('/work');

  // Wait for the page to load completely and scroll sections into view
  const profileSection = page.getByTestId('profile-section');
  const companiesSection = page.getByTestId('companies-section');
  const projectsSection = page.getByTestId('projects-section');
  const expertiseSection = page.getByTestId('expertise-section');

  await profileSection.scrollIntoViewIfNeeded();
  await expect(profileSection).toBeVisible();

  await companiesSection.scrollIntoViewIfNeeded();
  await expect(companiesSection).toBeVisible();

  await projectsSection.scrollIntoViewIfNeeded();
  await expect(projectsSection).toBeVisible();

  await expertiseSection.scrollIntoViewIfNeeded();
  await expect(expertiseSection).toBeVisible();
});

test('work page displays job cards', async ({ page }) => {
  await page.goto('/work');

  // Wait for the page to load completely
  const companiesSection = page.getByTestId('companies-section');
  await companiesSection.scrollIntoViewIfNeeded();

  const jobCards = page.getByTestId('job-card');
  await expect(jobCards).toHaveCount(3);

  // Check first job card content
  const firstJob = jobCards.first();
  await firstJob.scrollIntoViewIfNeeded();

  await expect(firstJob.getByTestId('job-company')).toBeVisible();
  await expect(firstJob.getByTestId('job-period')).toBeVisible();
  await expect(firstJob.getByTestId('job-title')).toBeVisible();
  await expect(firstJob.getByTestId('job-description')).toBeVisible();
  await expect(firstJob.getByTestId('job-highlights')).toBeVisible();
});

test('work page displays project cards', async ({ page }) => {
  await page.goto('/work');
  const projectsSection = page.getByTestId('projects-section');
  await projectsSection.scrollIntoViewIfNeeded();

  const projectCards = page.getByRole('heading', { level: 3 }).filter({
    hasText:
      /Flutter Desktop|Next.js Marketing Site|Web Cart|WordPress to React Migration|QuickNav/,
  });
  await expect(projectCards).toHaveCount(5);
});

test('work page displays skill tags', async ({ page }) => {
  await page.goto('/work');
  const expertiseSection = page.getByTestId('expertise-section');
  await expertiseSection.scrollIntoViewIfNeeded();

  await expect(page.getByTestId('tech-highlights')).toBeVisible();
  await expect(page.getByTestId('proficiencies-section')).toBeVisible();
  await expect(page.getByTestId('skills-section')).toBeVisible();
});
