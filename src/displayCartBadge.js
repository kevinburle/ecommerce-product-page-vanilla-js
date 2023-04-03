import get from "./getElement.js";

const badge = get(".amount-product-cart");
const cartProductsDOM = get(".cart-products");

function displayCartBadge(value) {
  if (cartProductsDOM.childNodes.length > 0) {
    let current = parseInt(badge.textContent);
    current += value;
    badge.textContent = current;
  } else {
    badge.textContent = "0";
  }
}

displayCartBadge();

export default displayCartBadge;
