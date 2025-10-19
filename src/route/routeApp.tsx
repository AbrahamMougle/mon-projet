import { ProductDetailPage } from "@/page/ProduitDetail";
import Navbar from "../composant/navBar";
import OrdersPage from "../page/OrderPage";
import CartPage from "../page/panier";
import HomePage from "@/page/homePage";
import { LoginForm } from "@/page/form";
import ProductListPage from "@/page/ProductList";
import { productLoader } from "@/page/ProductList";
import { dataFromLoader } from "@/page/ProduitDetail";
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
        path: "product/:id", element: <ProductDetailPage />, loader: ({ params }) => dataFromLoader(params.id)
      },
      { path: "orders", element: <OrdersPage /> },
      { path: "panier", element: <CartPage /> },
      { path: "connecte", element: <LoginForm /> },
      { path: "*", element: <h1 className="text-red-500  text-lg flex justify-center items-center">Page not found</h1> },// un mauvais urel conduit toujours a cette page
    ],
  },
];
