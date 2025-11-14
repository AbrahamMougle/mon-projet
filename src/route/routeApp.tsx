import { ProductDetailPage } from "@/page/ProduitDetail";
import Navbar from "../composant/navBar";
import OrdersPage from "../page/OrderPage";
import CartPage from "../page/panier";
import HomePage from "@/page/homePage";
import { SignForm, action as signupAction } from "@/page/form";
import { LoginForm, loginAction } from "@/page/login";
import ProductListPage from "@/page/ProductList";
import { productLoader } from "@/page/ProductList";
import { getProductById } from "@/page/ProduitDetail";

import { RouteObject } from "react-router-dom";
export const routesApp: RouteObject[] = [
  {
    path: "/",
    element: <Navbar />,

    children: [
      {
        index: true, element: <HomePage />
      },
      { path: "product", element: < ProductListPage />, loader: productLoader },
      {
        path: "product/:id", element: <ProductDetailPage />, loader: ({ params }) => getProductById(params.id)
      },
      { path: "orders", element: <OrdersPage /> },
      { path: "panier", element: <CartPage /> },
      { path: "connecte", element: <SignForm />, action: signupAction },
      { path: "login", element: <LoginForm />, action: loginAction },
      { path: "*", element: <h1 className="text-red-500  text-lg flex justify-center items-center">Page not found</h1> },// un mauvais urel conduit toujours a cette page
    ],
  },
];
