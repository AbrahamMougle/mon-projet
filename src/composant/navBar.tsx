import { Outlet } from "react-router-dom";
import Navigation from "./navigation";
import { Footer } from "./footer";
import { useStore } from "../store/store"



export default function Navbar() {
    const cart=useStore((set) =>set.cart)
    return <>
    <Navigation cartItemsCount={cart.length} />
    <Outlet/>
    <Footer/>
    </>
    
}