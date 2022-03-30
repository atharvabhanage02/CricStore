import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Cricket Helmet",
    description: "Navy Blue",
    image: "Assets/helmet.jpeg",
    fastDelivery: false,
    inStock: true,
    bestSeller: true,
    price: "1100",
    discountedPrice: "1149",
    discount: "4",
    category: "Bats",
    rating: "4.5",
  },
  {
    _id: uuid(),
    name: "Kookaburra Bat",
    description: "Kashmir Willow ",
    image: "Assets/card-bat.jpg",
    fastDelivery: false,
    inStock: true,
    bestSeller: false,
    price: "1590",
    discountedPrice: "2850",
    discount: "44",
    category: "Bats",
    rating: "3.5",
  },
  {
    _id: uuid(),
    name: "Batting Gloves",
    description: "Grey , White , Red ",
    image: "Assets/gloves.jpeg",
    fastDelivery: false,
    inStock: true,
    bestSeller: true,
    price: "849",
    discountedPrice: "919",
    discount: "7",
    category: "Balls",
    rating: "4.2",
  },
  {
    _id: uuid(),
    name: " Turf Pink Ball",
    description: "Pink Leather Ball",
    image: "Assets/pink-ball.jpeg",
    fastDelivery: false,
    inStock: true,
    bestSeller: false,
    price: "879",
    discountedPrice: "999",
    discount: "10",
    category: "Bats",
    rating: "3.1",
  },
  {
    _id: uuid(),
    name: "Arm Guard",
    description: "White",
    image: "Assets/arm-guard.jpeg",
    fastDelivery: false,
    inStock: true,
    bestSeller: false,
    price: "289",
    discountedPrice: "299",
    discount: "3",
    category: "Bats",
    rating: "2.6",
  },
  {
    _id: uuid(),
    name: "Batting Pad",
    description: "White",
    image: "Assets/batting-pad.jpeg",
    fastDelivery: false,
    inStock: true,
    bestSeller: false,
    price: "1508",
    discountedPrice: "1999",
    discount: "24",
    category: "Bats",
    rating: "1.2",
  },
  {
    _id: uuid(),
    name: "SG Players Edition",
    description: "English Willow",
    image: "Assets/sg-bat-1.jpg",
    fastDelivery: false,
    inStock: true,
    bestSeller: true,
    price: "2459",
    discountedPrice: "2999",
    discount: "18",
    category: "Balls",
    rating: "3.0",
  },
];
