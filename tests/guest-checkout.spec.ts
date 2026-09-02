import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('successful guest checkout with Cash on Delivery', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.open();

  await homePage.openClothingCategory();

  await page.getByText('Westin Test 12cm', { exact: true }).click();

  await productPage.verifyProduct('Westin Test 12cm');

  await productPage.addToCart();

  await cartPage.openCart();

  await cartPage.verifyProductInCart('Westin Test 12cm');

  await checkoutPage.fillCustomerInformation();

  await checkoutPage.selectCashOnDelivery();

  await checkoutPage.acceptTerms();

  await checkoutPage.placeOrder();

  await checkoutPage.verifyOrderConfirmation();
});