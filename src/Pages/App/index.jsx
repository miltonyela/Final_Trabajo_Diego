import { useRoutes, BrowserRouter } from 'react-router-dom'    
import Inventario from '../Inventario'
import Nosotros from '../Nosotros'
import './App.css'
import Navbar from '../../Components/Navbar'
import { CartContextProvider } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSiderMenu'


// Declaración Rutas
const AppRoutes = () => {
    let routes = useRoutes([
      {path: '/', element: <Inventario/>},
      {path: '/contacto', element: <Nosotros/>},
      
    ])  
    return routes
}

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
          <CheckoutSideMenu />
      </BrowserRouter>
    </CartContextProvider>
)
}
export default App
