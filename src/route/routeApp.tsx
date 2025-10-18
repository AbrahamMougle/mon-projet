import { ProductDetailPage } from "@/page/ProduitDetail";
import Navbar from "../composant/navBar";
import OrdersPage from "../page/OrderPage";
import CartPage from "../page/panier";
import HomePage from "@/page/homePage";
import { LoginForm } from "@/page/form";
import ProductListPage from "@/page/ProductList";
import { productLoader } from "@/page/ProductList";
import { dataFromLoader } from "@/page/ProduitDetail";
import { redirect } from "react-router-dom";
function fecthBebore() {
 let auth=true
 if (!auth) {
  throw redirect('/connecte')
 }
  
}

export  const routesApp=[
  {
    path: "/",
    element: <Navbar/>,/*ce que les composant partage en commun*/
    
    children: [
      { index: true, element:<HomePage/>,loader:()=>fecthBebore()
      },// large par defaut lorsquue l'utilisateur sera sur /
      { path: "product", element:< ProductListPage/>,loader:productLoader},
      { path: "product/:id", element:<ProductDetailPage/>,loader:({params}:{params:{id:string}})=>dataFromLoader(params.id)
      },
      { path: "orders", element:<OrdersPage/>},
      { path: "panier", element:<CartPage/>},
      { path: "connecte", element:<LoginForm/>},
      { path: "*", element: <h1 className="text-red-500  text-lg flex justify-center items-center">Page not found</h1> },// un mauvais urel conduit toujours a cette page
    ],
  },
];
