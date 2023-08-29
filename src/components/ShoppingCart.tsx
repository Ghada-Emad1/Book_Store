import {GrClose} from 'react-icons/gr'
import { useShopping } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import { FormatCurrency } from '../utility/FormatCurrency'
import StoreBook from '../data/books.json'
interface ShoppingCartProps{
    isopen:boolean
}
export const ShoppingCart=({isopen}:ShoppingCartProps)=>{
    const {CloseCart,cartItems}=useShopping()
    return (
        
        <div className={isopen?"bg-white w-[460px] right-0 top-0 fixed h-full p-4":'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <div className='flex items-center justify-between'>
                <h1>Cart</h1>
                <GrClose size={25} onClick={CloseCart} className="cursor-pointer"/>
            </div>
            <div>
                {cartItems.map(item=>(
                    <CartItem key={item.id} {...item}/>
                ))}
            </div>
            <div className='font-bold absolute right-0 text-lg mr-4'>
                Total {FormatCurrency(cartItems.reduce((total,cartItem)=>{
                    const item=StoreBook.find(item=>item.id===cartItem.id)
                    return total+(item?.price||0 )*cartItem.quantity
                },0))}
            </div>
        </div>
    )
}