import get from './getElement.js'

const cartProductsDOM = get(".cart-products");

function addNewCartItem(id,item){
    // append item to the cart
    const article = document.createElement("article");
    article.classList.add("cart-product");
    article.dataset.id = id;
    article.innerHTML = item;
    cartProductsDOM.appendChild(article);
}

export default addNewCartItem;