// verify_game.spec.js
const { test, expect } = require('@playwright/test');
const path = require('path');

test('Game loop verification', async ({ page }) => {
  // Handle the prompt dialog
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept('Bolt');
  });

  // Navigate to the local index.html file
  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}`);

  // Wait for the game to initialize
  await page.waitForTimeout(1000);

  // Get initial health text
  const healthTextSelector = '#salud-tiene-texto';
  const initialHealthText = await page.textContent(healthTextSelector);
  const initialHealth = parseFloat(initialHealthText);
  console.log(`Initial Health: ${initialHealth}`);

  // Wait for continuous damage to happen (it runs every 500ms)
  await page.waitForTimeout(2000);

  // Get new health text
  const newHealthText = await page.textContent(healthTextSelector);
  const newHealth = parseFloat(newHealthText);
  console.log(`New Health: ${newHealth}`);

  // Verify health has decreased
  expect(newHealth).toBeLessThan(initialHealth);

  // Navigate to Boss screen
  await page.click('#viaje-boss');
  await page.waitForTimeout(500); // Wait for transition if any

  // Verify clicking the boss works
  const bossSelector = '#boss';
  await page.click(bossSelector);

  const healthAfterClickText = await page.textContent(healthTextSelector);
  const healthAfterClick = parseFloat(healthAfterClickText);
  console.log(`Health after click: ${healthAfterClick}`);

  expect(healthAfterClick).toBeLessThan(newHealth);
});
