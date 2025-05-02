import { test, expect } from '@playwright/test';

test('home page has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Andrew Hol(z)brook');
  const heroSection = page.getByTestId('home-hero');
  await expect(heroSection.getByRole('heading', { level: 1 })).toBeVisible();
});

test('home page has expected content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
