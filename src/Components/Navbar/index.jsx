import { NavLink } from "react-router-dom"
import {useContext } from 'react'
import { CartContext} from "../../Context"
import Logo from "../../Imagen/logo2.jpeg"

const Navbar = () =>{

    const context = useContext(CartContext)

    const activeStyle = ' underline underline-offset-4'

return (
    <nav className="flex justify-between items-center fixed z-5 top-0 w-full py-5 px-5 text-2xl font-light bg-cyan-950 text-white">
        <ul className="flex items-center gap-3">

            <li className="flex justify-between items-center">
                <img className="rounded-lg h-20"  src={Logo} alt="Logo" />
                
            </li>
            
            <li>
                <NavLink to='/contacto'
                    className={({ isActive }) => isActive ? activeStyle : undefined }>
                    MetalJim Estructuras
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                    className={({ isActive }) => isActive ? activeStyle : undefined }>
                    Inventario
                </NavLink>
            </li>
            
            
            <li>
                { context.count }
            </li>
        </ul>
    </nav>
)
}

export default Navbar