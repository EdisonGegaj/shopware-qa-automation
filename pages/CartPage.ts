import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page
      .getByRole('link', { name: 'Zur Kasse' })
      .click();
  }

  async verifyProductInCart(productName: string) {
    await expect(
      this.page.locator('a.line-item-label', {
        hasText: productName,
      })
    ).toBeVisible();
  }
}