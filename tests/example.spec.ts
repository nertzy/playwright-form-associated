import {test, expect} from '@playwright/test';

test('custom input using evaluate', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const input = page.getByRole('textbox');

  const value = await page.evaluate(() => {
    return document.querySelector('my-custom-input').value;
  })

  expect(value).toEqual("myValue")
});

test('custom input using toHaveValue', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const input = page.getByRole('textbox');

  await expect(input).toHaveValue("myValue")
});