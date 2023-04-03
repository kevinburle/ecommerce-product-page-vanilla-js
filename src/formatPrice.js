function formatPrice(value) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return formattedPrice;
}

export default formatPrice;
