const cartEl = document.getElementById("cart");

// Array of current items in the cart
const cart = [];

// Keep track of cart total price
let cartTotal = 0;

export function renderCart(menu, itemId) {
  // Render cart structure
  cartEl.innerHTML = `
            <h3>Your order</h3>
            <div id="cart-items"></div>
            <hr />
            <div class="cart-total">
              <div class="cart-total">Total price:</div>
              <div class="cart-total-amount" id="cart-total-amount"></div>
            </div>
            <button id="confirm-btn">Complete order</button>
        `;

  // Update cart array (item added)
  cart.push(itemId);
  cartTotal += menu[itemId].price;

  // Render items in the cart
  renderCartItems(cart, menu, itemId);

  // Delete element from cart items if 'remove' is clicked
  document.getElementById("cart-items").addEventListener("click", function (e) {
    // Get id of clicked element
    const menuItemId = parseInt(e.target.id);

    // Delete element only if 'remove' is clicked
    if (menuItemId >= 0 && menuItemId < menu.length) {
      // Delete element from cart array
      cart.splice(cart.indexOf(menuItemId), 1);

      // Subtract price from total price
      cartTotal -= menu[menuItemId].price;

      // Clean cart list
      document.getElementById("cart-items").innerHTML = "";

      // Render items in the cart after change
      renderCartItems(cart, menu, itemId);
    }
  });

  // When user clicks confirm button, the form is shown (only if there's something in the cart)
  document.getElementById("confirm-btn").addEventListener("click", function () {
    if (cart.length > 0) {
      document.getElementById("pay-form").style.display = "block";
    }
  });
}

function renderCartItems(items, menu, itemId) {
  // For each element in the cart array render item in the cart list
  items.forEach(function (itemId) {
    document.getElementById("cart-items").innerHTML += `
              <div class="cart-item">
              <div class="cart-item-name">${menu[itemId].name}</div>
              <div class="cart-remove" id="${itemId}".>remove</div>
              <div class="cart-item-price">$${menu[itemId].price}</div>
          </div>       
    `;
  });

  // Render cart total
  document.getElementById("cart-total-amount").innerText = `$${cartTotal}`;
}
