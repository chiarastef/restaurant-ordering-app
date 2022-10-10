const menuEl = document.getElementById("menu");

export function renderMenu(menu) {
  menu.forEach(function (item) {
    menuEl.innerHTML += `
        <div class="menu-item">
          <div class="menu-item-icon">${item.emoji}</div>
          <div class="menu-item-info">
            <div class="item-title">${item.name}</div>
            <div class="item-ingredients">${item.ingredients.join(", ")}</div>
            <div class="item-price">$${item.price}</div>
          </div>
          <button class="menu-item-add-btn" id="${item.id}">+</button>
        </div>
        <hr />
    `;
  });
}
