import calculateCartHeight from "./calculateCartHeight.js";
import displayCartBadge from "./displayCartBadge.js";

function removeItemFromCart(event) {
  if (event.target.parentElement.classList.contains("delete-product")) {
    const cartItem = event.target.parentElement.parentElement;
    const itemAmount = parseInt(
      event.target.parentElement.previousElementSibling.children[1]
        .childNodes[1].textContent
    );
    // update badge value before removing
    displayCartBadge(parseInt(`-${itemAmount}`));
    // remove item from the cart
    cartItem.remove();
    // recalculate height for the cart
    calculateCartHeight();
  }
}

export default removeItemFromCart;
