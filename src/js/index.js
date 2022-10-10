import "../scss/style.scss";

import { menuArray } from "./data";
import { renderMenu } from "./render-menu";
import { renderCart } from "./render-cart";

const menuEl = document.getElementById("menu");
const cart = document.getElementById("cart");
const formEl = document.getElementById("form-el");
const payForm = document.getElementById("pay-form");
const orderConfirm = document.getElementById("order-confirmation");
const userName = document.getElementById("user-name");

// Render restaurant menu
renderMenu(menuArray);

// Render up to date cart when adding item(s) to cart
menuEl.addEventListener("click", function (e) {
  // Get id of clicked element
  const menuItemId = parseInt(e.target.id);

  // Render cart only if + button is clicked
  // (every button has the id of its item)
  if (menuItemId >= 0 && menuItemId < menuArray.length) {
    renderCart(menuArray, menuItemId);
  }
});

// Render thank you text after filling up form to pay
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide form to pay
  payForm.style.display = "none";

  // Render thank you message
  orderConfirm.style.display = "block";
  orderConfirm.innerText = `Thanks, ${userName.value}! Your order is on its way!`;

  // Hide cart
  cart.style.display = "none";
});
