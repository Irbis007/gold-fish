export const URLS = {
  home: "/",
  blog: "/blog",
  about: "/about",
  catalog: {
    default: "/catalog",
    products: {
      default: "/catalog/product/:id",
      boardGames: "/catalog/board-games",
      magicCathering: "/catalog/magic-the-cathering",
      warhammer: "/catalog/warhammer",
      paints: "/catalog/paints",
      gameAccessories: "/catalog/game-accessories",
      accessoriesForModeling: "/catalog/accessories-for-modeling",
      childrenProducts: "/catalog/children-products",
    },
  },
  events: {
    default: "/events",
    id: "/events/:id",
  },
  contacts: "/contacts",
  cart: "/cart",
};
