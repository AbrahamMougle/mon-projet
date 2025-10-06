import Navbar from "../composant/navBar";
import CartPage from "../page/cartPage";
import Home from "../page/home";

export  const routesApp=[
  {
    path: "/",
    element: <Navbar/>,/*ce que les composant partage en commun*/
    errorElement: <h1>texte</h1>,
    children: [
      { index: true, element: <CartPage/>},// la ge par defaut lorsquue l'utilisateur sera sur /
      { path: "home", element:<Home/>},
      { path: "cart", element:<h1>texte</h1>},
      { path: "*", element: <h1 className="text-red-500  text-lg flex justify-center items-center">Page not found</h1> },// un mauvais urel conduit toujours a cette page
    ],
  },
];
