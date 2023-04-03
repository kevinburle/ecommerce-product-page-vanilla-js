import get from "./getElement.js";
import formatPrice from "./formatPrice.js";

const cartProductsDOM = get(".cart-products");

function updateCartItem(id, price, amount) {
  // update cart item
  const element = cartProductsDOM.querySelector(`[data-id="${id}"]`);
  const elementPrices = element.querySelector(".product-prices");
  const currentAmount = parseInt(
    element.querySelector(".product-amout").textContent
  );

  elementPrices.innerHTML = `${formatPrice(
    price
  )} x <span class="product-amout">${currentAmount + amount}</span>
    <span class="product-total-price"> ${formatPrice(
      price * (currentAmount + amount)
    )} </span>`;
}

export default updateCartItem;
