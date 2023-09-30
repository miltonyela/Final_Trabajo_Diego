import {useContext } from 'react'
import {CartContext} from "../../Context";
import './style.css'

const OrderProducts = () => {
    const context = useContext(CartContext);


    return (
        <aside 
        className={`${context.isShoppingCartOpen ? 'flex' : 'hidden'} product-detail flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Carrito</h2>
                <div onClick={() => context.closeShoppingCart() }>x</div>
            </div>
            
        </aside>
    )
}
export default OrderProducts;