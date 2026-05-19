import { createBrowserRouter, Navigate } from "react-router-dom";
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
  EventPage,
  BlogPage,
  AccountWrapper,
  AccountEvents,
  Settings,
  Orders,
} from "@pages";
import { AppLayout } from "../layouts";
import { Profile } from "@pages/account/ui/Profile";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: URLS.home,
        element: <Home />,
      },
      {
        path: URLS.account.default,
        element: <AccountWrapper />,
        children: [
          {
            index: true,
            element: <Navigate to={URLS.account.profile} />,
          },
          {
            path: URLS.account.profile,
            element: <Profile />,
          },
          {
            path: URLS.account.events,
            element: <AccountEvents />,
          },
          {
            path: URLS.account.settings,
            element: <Settings />,
          },
        ],
      },
      {
        path: URLS.account.orders,
        element: <Orders />,
      },
      {
        path: URLS.blog.default,
        element: <Blog />,
      },
      {
        path: URLS.blog.id,
        element: <BlogPage />,
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
            index: true,
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
        path: URLS.events.default,
        element: <Events />,
      },
      {
        path: URLS.events.id,
        element: <EventPage />,
      },
      {
        path: URLS.cart,
        element: <Cart />,
      },
    ],
  },
]);
