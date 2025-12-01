import { test, expect } from "@playwright/test";

test("place an order", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page.getByRole("link", { name: "Gavin the Tiger" }).click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByRole("textbox", { name: "Full name" }).click();
  await page.getByRole("textbox", { name: "Full name" }).fill("Andrii");
  await page.getByRole("textbox", { name: "Full name" }).press("Tab");
  await page.getByRole("textbox", { name: "Email" }).fill("email@meail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Street address" }).fill("streetDIA");
  await page.getByRole("textbox", { name: "Street address" }).press("Tab");
  await page.getByRole("textbox", { name: "Apt/Suite" }).press("Tab");
  await page.getByRole("textbox", { name: "City" }).click();
  await page.getByRole("textbox", { name: "City" }).fill("boston");
  await page.getByRole("textbox", { name: "City" }).press("Tab");
  await page.getByRole("textbox", { name: "Country" }).click();
  // it will fail here
  await page
    .locator(
      ".snipcart-textbox.snipcart__font--bold.snipcart__font--secondary.snipcart-form__select.snipcart-textbox--focus"
    )
    .click();
  // we want to fix
  await page.getByText("United States").click();
  await page.getByRole("textbox", { name: "Province/State" }).click();
  await page.getByText("Alabama").click();
  await page.getByRole("textbox", { name: "Postal/ZIP code" }).click();
  await page.getByRole("textbox", { name: "Postal/ZIP code" }).fill("43432");
  await page.getByText("1 Billing Full name Email").click();
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "Card number" })
    .click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "Card number" })
    .fill("4242 4242 4242 4242");
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "CVV" })
    .click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "CVV" })
    .fill("123");
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "MM/YY" })
    .click();
  await page
    .locator("iframe")
    .contentFrame()
    .getByRole("textbox", { name: "MM/YY" })
    .fill("02/27");
  await page.getByRole("button", { name: "Place order" }).click();
  await page.getByRole("button", { name: "Continue shopping" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Our Story" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByLabel("Remove item").click();
  await page.getByRole("button", { name: "Back to store" }).click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page.getByRole("button", { name: "Remove item" }).click();
  await page.getByRole("link", { name: "shopping_cart" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Products" })
    .click();
  await page.getByRole("link", { name: "Get in touch" }).click();
  await page.locator('form[name="searchform"]').click();
});
