import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "Bats",
    img: "Assets/category-bats.jpg",
  },
  {
    _id: uuid(),
    category: "Balls",
    img: "Assets/category-cricket-balls.webp",
  },
  {
    _id: uuid(),
    category: "Others",
    img: "Assets/other-category.webp",
  },
];
