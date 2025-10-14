import { ProductDetailPage } from "@/page/ProduitDetail";
import Navbar from "../composant/navBar";
import OrdersPage from "../page/OrderPage";
import CartPage from "../page/panier";
import HomePage from "@/page/homePage";
import { LoginForm } from "@/page/form";
import ProductListPage from "@/page/ProductList";
export  const routesApp=[
  {
    path: "/",
    element: <Navbar/>,/*ce que les composant partage en commun*/
    errorElement: <h1>texte</h1>,
    children: [
      { index: true, element:<HomePage/>},// la ge par defaut lorsquue l'utilisateur sera sur /
      { path: "product", element:< ProductListPage/>},
      { path: "product/:id", element:<ProductDetailPage/>},
      { path: "detail", element:<ProductDetailPage/>},
      { path: "orders", element:<OrdersPage/>},
      { path: "panier", element:<CartPage/>},
      { path: "connecte", element:<LoginForm/>},
      { path: "*", element: <h1 className="text-red-500  text-lg flex justify-center items-center">Page not found</h1> },// un mauvais urel conduit toujours a cette page
    ],
  },
];
