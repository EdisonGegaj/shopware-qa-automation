import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async verifyProduct(productName: string) {
    await expect(
      this.page.getByRole('heading', {
        name: productName,
        exact: true,
      })
    ).toBeVisible();
  }

  async addToCart() {
    await this.page.getByRole('button', {
      name: /in den warenkorb/i,
    }).click();
  }
}