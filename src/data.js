const products = [
  {
    id: 1,
    company: "sneaker company",
    name: "fall limited edition sneakers",
    price: 125,
    oldPrice: 250,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/image-product-1.jpg", ["data-value"]: 1 },
      { img: "./images/image-product-2.jpg", ["data-value"]: 2 },
      { img: "./images/image-product-3.jpg", ["data-value"]: 3 },
      { img: "./images/image-product-4.jpg", ["data-value"]: 4 },
    ],
    snippet: `These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand
      everything the weather can offer.`,
  },
  {
    id: 2,
    company: "vike company",
    name: "winter edition sneakers",
    price: 95,
    oldPrice: 135,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/sneaker-1.jpg", ["data-value"]: 1 },
      { img: "./images/sneaker-2.jpg", ["data-value"]: 2 },
      { img: "./images/sneaker-3.jpg", ["data-value"]: 3 },
    ],
    snippet: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolorem at, a dignissimos similique architecto perspiciatis fugiat animi veniam quaerat expedita maxime provident tempore, illo, iusto minima dolores. Ea, at.`,
  },
  {
    id: 3,
    company: "babidas company",
    name: "summer edition sneakers",
    price: 325,
    oldPrice: 522,
    promotion: function () {
      return Math.round((this.price * 100) / this.oldPrice);
    },
    images: [
      { img: "./images/shoes-1.jpg", ["data-value"]: 1 },
      { img: "./images/shoes-2.jpg", ["data-value"]: 2 },
    ],
    snippet: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, architecto? Nam odio nobis ullam eius, veritatis sit asperiores aspernatur, delectus inventore beatae, velit fugiat. Itaque eaque aliquid ipsa rem exercitationem.`,
  },
];

export default products;
