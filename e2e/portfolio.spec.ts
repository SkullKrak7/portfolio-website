import { test, expect } from '@playwright/test';

test.describe('Portfolio Website E2E', () => {
  test('homepage loads and displays content', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Sai Karthik Kagolanu/i })).toBeVisible();
    await expect(page.getByText(/ML Engineer & Robotics Graduate/i)).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /View Projects/i }).click();
    await expect(page).toHaveURL('/projects');
    await expect(page.getByRole('heading', { name: /Projects/i })).toBeVisible();
  });

  test('project detail page loads', async ({ page }) => {
    await page.goto('/projects');
    await page.getByRole('link', { name: /RAG Demo/i }).first().click();
    await expect(page).toHaveURL('/projects/rag-demo');
    await expect(page.getByRole('heading', { name: /RAG Demo/i })).toBeVisible();
  });

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: /Get in Touch/i })).toBeVisible();
  });

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
    await page.getByRole('button', { name: /theme/i }).click();
    await expect(html).toHaveClass(/dark/);
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });
});
