import { test, expect } from '@playwright/test';

test('play page has correct title', async ({ page }) => {
  await page.goto('/play');
  const heroSection = page.getByTestId('play-hero');
  await expect(heroSection.getByRole('heading', { level: 1 })).toHaveText(/Hobby Corner/);
});

test('play page displays hobbies', async ({ page }) => {
  await page.goto('/play');
  const hobbySections = page.getByTestId('hobby-section');
  await expect(hobbySections).toHaveCount(4);
});

test('play page displays hobby details', async ({ page }) => {
  await page.goto('/play');
  const firstHobby = page.getByTestId('hobby-section').first();

  // Check for required elements
  await expect(firstHobby.getByTestId('hobby-icon')).toBeVisible();
  await expect(firstHobby.getByTestId('hobby-name')).toBeVisible();
  await expect(firstHobby.getByTestId('hobby-description')).toBeVisible();
  await expect(firstHobby.getByTestId('hobby-content-section')).toBeVisible();
  await expect(firstHobby.getByTestId('hobby-section-title')).toBeVisible();

  // Check that there is at least one content paragraph
  const contentParagraphs = firstHobby.getByTestId('hobby-section-content');
  await expect(contentParagraphs.first()).toBeVisible();
  await expect(contentParagraphs).toHaveCount(5); // Disc Golf section has 5 paragraphs
});
