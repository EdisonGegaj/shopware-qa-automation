
import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async openClothingCategory() {
    await this.page
      .getByLabel('Hauptnavigation')
      .getByRole('link', { name: 'Clothing' })
      .click();
  }
}