import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routesApp } from "./route/routeApp";
const router = createBrowserRouter(routesApp);

function AppRouter() {
  return <RouterProvider router={router} />;
}
export default function App() {
  return <AppRouter />;
}

/*import { useState } from "react"
import { Menu } from "lucide-react"

//bar de navigation responsive
export default function Demo() {
  const [open, setOpen] = useState<boolean>(false)
  return <div >
    <div className=" z-50 sticky top-0 w-full backdrop-blur-2xl supports-[backdrop-filter]:bg-blue-500">
      <nav className="flex container mx-auto justify-between">
        <div>Logo</div>
        <ul className="md:flex gap-5 hidden space-x-2 ">
          <li>Accueil</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden" onClick={() => setOpen((state) => !state)}>
          {
            open ? 'open' : <Menu className="h-5 w-5" />
          }
        </div>
      </nav>

    </div>
    {
      open && (
        <div className=" absolute right-0 top-6 w-[100px]  md:hidden bg-blue-300 ">
          <ul className="flex flex-col items-center h-screen justify-between ">
            <li>Accueil</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )
    }

  </div>
}*/