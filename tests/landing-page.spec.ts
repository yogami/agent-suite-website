
import { test, expect } from '@playwright/test';

test.describe('AgentOps Suite Landing Page', () => {
    test('should display correct hero and product copy', async ({ page }) => {
        // Navigate to homepage
        await page.goto('/');

        // 1. Check Hero Section
        await expect(page.locator('h1')).toHaveText('AgentOps Suite');
        await expect(page.locator('h2').first()).toContainText('Infrastructure for serious agent ecosystems');
        await expect(page.getByText('Make your AI agents understand each other')).toBeVisible();
        await expect(page.getByText('Built for agent-platform teams')).toBeVisible();

        // 2. Check Products Section
        // Semantic Aligner
        await expect(page.getByText('Stop agents talking past each other')).toBeVisible();
        await expect(page.getByText('Normalizes intents and fields across vendors')).toBeVisible();

        // Deadline Enforcer
        await expect(page.getByText('SLA watchdog for agents')).toBeVisible();
        await expect(page.getByText('Tracks task deadlines with heartbeats')).toBeVisible();

        // Fairness Auditor
        await expect(page.getByText('Referee for autonomous decisions')).toBeVisible();

        // 3. Check CTA Section
        await expect(page.getByRole('heading', { name: 'Ready to Hard-Launch Your Agent Network?' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Contact us about your agent mesh' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'View projects on GitHub' })).toBeVisible();
    });
});
