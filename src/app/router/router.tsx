import { createBrowserRouter } from "react-router-dom";
import { URLS } from "@shared/consts";
import {
  Home,
  Blog,
  About,
  Catalog,
  Events,
  Product,
  Contacts,
  Cart,
} from "@pages";
import { AppLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: URLS.home,
        element: <Home />,
      },
      {
        path: URLS.blog,
        element: <Blog />,
      },
      {
        path: URLS.about,
        element: <About />,
      },
      {
        path: URLS.catalog.default,
        element: <Catalog />,
        children: [
          {
            path: `*`,
            element: <Catalog />,
          },
        ],
      },
      {
        path: URLS.contacts,
        element: <Contacts />,
      },
      {
        path: URLS.catalog.products.default,
        element: <Product />,
      },
      {
        path: URLS.events,
        element: <Events />,
      },

      {
        path: URLS.cart,
        element: <Cart />,
      },
    ],
  },
]);
