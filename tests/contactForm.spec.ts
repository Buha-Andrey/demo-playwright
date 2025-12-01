import { test, expect } from "@playwright/test";

test("contact form", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
  await page.locator("div:nth-child(3) > div").first().click();
  await page.locator("div:nth-child(3) > div:nth-child(2)").click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("textbox", { name: "Full Name" }).click();
  await page.getByRole("textbox", { name: "Full Name" }).fill("andruu");
  await page.getByRole("textbox", { name: "Email Address" }).click();
  await page
    .getByRole("textbox", { name: "Email Address" })
    .fill("nail@nail.com");
  await page.getByRole("textbox", { name: "Message" }).click();
  await page
    .getByRole("textbox", { name: "Message" })
    .fill("hi \nhappy njew year");
  await page.getByRole("button", { name: "Send Message" }).click();
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
  await page.getByRole("link", { name: "Returns" }).click();
  await page.getByRole("link", { name: "Wikipedia" }).click();
});
