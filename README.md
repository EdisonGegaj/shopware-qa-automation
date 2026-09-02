# Shopware 6 QA Automation

QA testing and test automation project for the Shopware 6 demo storefront.

This project was created as part of a QA / Automation Tester practical assignment. It includes manual test cases, end-to-end test automation, test evidence, and bug reporting.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Shopware 6

## Automated Test

The project includes one positive end-to-end test for guest checkout using Cash on Delivery.

### Test Flow

1. Open the Shopware storefront
2. Navigate to the Clothing category
3. Open the "Westin Test 12cm" product
4. Verify the product
5. Add the product to the cart
6. Proceed to checkout as a guest
7. Enter customer and shipping information
8. Select Cash on Delivery
9. Accept Terms & Conditions
10. Place the order
11. Verify the order confirmation

### Test Result

- Browser: Chromium
- Test Type: End-to-End
- Checkout Type: Guest Checkout
- Payment Method: Cash on Delivery
- Result: PASS

## Manual Testing

The manual test plan contains 10 test cases covering positive, negative, and edge-case scenarios.

| ID | Test Case | Type | Priority | Status |
|---|---|---|---|---|
| TC-001 | Successful Guest Checkout with Cash on Delivery | Positive | High | PASS |
| TC-002 | Missing First Name | Negative | High | PASS |
| TC-003 | Checkout Without Accepting Terms | Negative | High | PASS |
| TC-004 | Checkout with Empty Cart | Negative | High | PASS |
| TC-005 | Add Product to Cart | Positive | High | PASS |
| TC-006 | Increase Product Quantity | Positive | Medium | PASS |
| TC-007 | Special Characters in Customer Information | Edge | Medium | PASS |
| TC-008 | Large Product Quantity | Edge | Medium | PASS |
| TC-009 | Product Details Display | Positive | Medium | PASS |
| TC-010 | Change Product Variant | Positive | Medium | PASS |

## Project Structure

```text
shopware-qa-automation/
├── evidence/
├── pages/
│   ├── HomePage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   └── guest-checkout.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

Install the project dependencies:

```bash
npm install
```

Install Playwright Chromium:

```bash
npx playwright install chromium
```

## Run Tests

Run the automated test:

```bash
npx playwright test tests/guest-checkout.spec.ts --project=chromium
```

Run with the browser visible:

```bash
npx playwright test tests/guest-checkout.spec.ts --project=chromium --headed
```

## Test Report

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## Test Evidence

Screenshots from manual testing are stored in the `evidence` folder.

The evidence includes screenshots for:
- Successful guest checkout
- Required field validation
- Terms & Conditions validation
- Empty cart
- Product added to cart
- Product quantity changes
- Special characters
- Large product quantity
- Product details
- Product variant change

## Page Object Model

The automation framework uses the Page Object Model (POM) to separate page-specific actions from test logic.

The following page objects are used:

- `HomePage.ts`
- `ProductPage.ts`
- `CartPage.ts`
- `CheckoutPage.ts`

This improves code readability, maintainability, and reusability.

## Test Data

The automated test uses test customer data for the guest checkout flow.

The test data is only used for demonstration purposes and does not represent a real customer account.

## Bug Report

A separate bug report is included as part of the assignment.

The reported issue focuses on an inconsistent language/localization experience in the checkout flow.

## Future Improvements

- Add more automated negative and edge-case tests
- Add cross-browser testing
- Add API testing
- Improve test data management
- Add CI/CD integration with GitHub Actions
- Improve selectors using dedicated test IDs where available
- Add automated screenshot evidence for important checkpoints

## Author

Edison Gegaj