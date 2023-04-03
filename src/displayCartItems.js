import formatPrice from "./formatPrice.js";
import get from "./getElement.js";
import calculateCartHeight from "./calculateCartHeight.js";
import addNewCartItem from "./addNewCartItem.js";
import updateCartItem from "./updateCartItem.js";
import removeItemFromCart from "./removeItemFromCart.js";
import displayCartBadge from "./displayCartBadge.js";
import { hideCart } from "./toggleCart.js";

const cartProductsDOM = get(".cart-products");

function displayCartItems(id, amount, data) {
  //  convert id to number
  id = parseInt(id);

  //  find corresponding item from data array
  const itemData = data.find((item) => item.id === id);
  //  destructuring itemData
  const { name, price, images } = itemData;

  //  if element doesn't exist let's create it
  if (!cartProductsDOM.querySelector(`[data-id="${id}"]`)) {
    const item = `<img
        src="${images[0].img}"
        alt="cart product image"
        class="product-image"
      />
      <div class="product-info">
        <h3 class="product-name">${name}</h3>
        <p class="product-prices">
        ${formatPrice(price)} x <span class="product-amout">${amount}</span>
          <span class="product-total-price"> ${formatPrice(
            price * amount
          )} </span>
        </p>
      </div>
      <button class="delete-product">
        <svg
          width="14"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a"
            />
          </defs>
          <use fill-rule="nonzero" xlink:href="#a" />
        </svg>
      </button>`;

    addNewCartItem(id, item);
    calculateCartHeight();
  } else {
    updateCartItem(id, price, amount);
  }
  // update badge value
  displayCartBadge(amount);
}

// remove item from cart
cartProductsDOM.addEventListener("click", function (e) {
  removeItemFromCart(e);
  // close cart if last item is removed
  if (cartProductsDOM.children.length < 1) {
    hideCart();
  }
});

export default displayCartItems;
