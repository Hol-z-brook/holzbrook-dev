import { test, expect } from '@playwright/test';

test('family page has correct title', async ({ page }) => {
  await page.goto('/family');
  await expect(page).toHaveTitle('Meet the Fam');
  const heroSection = page.getByTestId('family-hero');
  await expect(heroSection.getByRole('heading', { level: 1 })).toBeVisible();
});

test('family page displays family members', async ({ page }) => {
  await page.goto('/family');
  const memberCards = page.getByTestId('family-member-card');
  await expect(memberCards).toHaveCount(6);
});

test('family page displays member information', async ({ page }) => {
  await page.goto('/family');

  // Wait for the first card to be present and scroll it into view
  const firstMember = page.getByTestId('family-member-card').first();
  await firstMember.waitFor({ state: 'attached' });
  await firstMember.scrollIntoViewIfNeeded();

  // Check for required elements
  await expect(firstMember.getByTestId('member-emoji')).toBeVisible();
  await expect(firstMember.getByTestId('member-name')).toBeVisible();
  await expect(firstMember.getByTestId('member-role')).toBeVisible();
  await expect(firstMember.getByTestId('member-middle-name')).toBeVisible();
  await expect(firstMember.getByTestId('member-bio-section')).toBeVisible();
  await expect(firstMember.getByTestId('member-interests-section')).toBeVisible();
});
