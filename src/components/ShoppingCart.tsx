import {GrClose} from 'react-icons/gr'
import { useShopping } from '../context/ShoppingCartContext'
interface ShoppingCartProps{
    isopen:boolean
}
export const ShoppingCart=({isopen}:ShoppingCartProps)=>{
    const {CloseCart}=useShopping()
    return (
        
        <div className={isopen?"bg-white w-[460px] right-0 top-0 fixed h-full p-4":'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <div className='flex items-center justify-between'>
                <h1>Cart</h1>
                <GrClose size={25} onClick={CloseCart} className="cursor-pointer"/>
            </div>
        </div>
    )
}