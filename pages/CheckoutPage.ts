import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCustomerInformation() {
    await this.page
      .getByRole('textbox', { name: 'Vorname' })
      .fill('Edison');

    await this.page
      .getByRole('textbox', { name: 'Nachname' })
      .fill('Gegaj');

    await this.page
      .getByRole('textbox', { name: 'E-Mail-Adresse' })
      .fill('edisongegaj10@gmail.com');

    await this.page
      .getByRole('textbox', { name: 'Straße und Hausnummer' })
      .fill('Teststraße 10');

    await this.page
      .getByRole('textbox', { name: 'PLZ' })
      .fill('10115');

    await this.page
      .getByRole('textbox', { name: 'Ort' })
      .fill('Berlin');

    await this.page
      .getByRole('group', { name: 'Ihre Adresse' })
      .getByLabel('Bundesland')
      .selectOption('019bf75c39ae70409cb8096995d5ec48');

    await this.page
      .getByRole('button', { name: 'Weiter' })
      .click();
  }

  async selectCashOnDelivery() {
    await this.page
      .locator('div:nth-child(2) > .payment-form-group > .form-check')
      .click();
  }

  async acceptTerms() {
    await this.page
      .getByRole('checkbox', {
        name: 'Ich habe die AGB gelesen und',
      })
      .check();
  }

  async placeOrder() {
    await this.page
      .getByRole('button', {
        name: 'Zahlungspflichtig bestellen',
      })
      .click();
  }

  async verifyOrderConfirmation() {
    await expect(
      this.page.getByText(/Bestellbestätigung|Order confirmation/i)
    ).toBeVisible();
  }
}