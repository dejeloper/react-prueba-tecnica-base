// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('app has title', async ({ page }) => {
  // await page.waitForTimeout(0)
  await page.goto(LOCALHOST_URL)

  const h1 = await page.getByRole('heading')
  const h1Text = await h1.textContent()

  await expect(h1Text?.length).toBeGreaterThan(0)
})

test('app has success title', async ({ page }) => {
  // await page.waitForTimeout(0)
  await page.goto(LOCALHOST_URL)

  const h1 = await page.getByRole('heading')
  const h1Text = await h1.textContent()

  await expect(h1Text).toBe('Api de Gatos')
})

test('app get a fact', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const parrafo = await page.getByRole('paragraph')
  const fact = await parrafo.textContent()

  await expect(fact?.length).toBeGreaterThan(0)
})

test('app render a image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  const image = await page.getByRole('img')
  const imgSrc = await image.getAttribute('src')

  await expect(imgSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
