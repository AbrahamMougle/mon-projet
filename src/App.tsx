import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routesApp } from "./route/routeApp";

const router = createBrowserRouter(routesApp);

function AppRouter() {
  return <RouterProvider router={router} />;
}
export default function App() {
  return <AppRouter />; 
}