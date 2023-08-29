import { useShopping } from "../context/ShoppingCartContext"
import BookStore from '../data/books.json'
import {FormatCurrency} from '../utility/FormatCurrency'
interface CartItemProps{
    id:number,
    quantity:number
}

export const CartItem=({id,quantity}:CartItemProps)=>{
   const {removeItems}=useShopping();
   const item=BookStore.find(item=>item.id===id);
   if(item == null)return null;
   return(
    
        <div className="flex flex-row items-center gap-2">
           <img src={item.imgUrl} className="w-[200px] mt-4"/>
           <div>
            <div className="flex items-center gap-1">
            <div>{item.name}</div>
               {quantity>1 &&<span className="text-xs">x{quantity}</span>}
            </div>
            <div className="text-gray-500">
                {FormatCurrency(item.price)}
            </div>
             
           </div>
           <div className="absolute right-0 space-x-2 flex gap-1">
            <div>{FormatCurrency(item.price *quantity)}</div>
            <button className="border border-gray-300 px-1 mr-3 hover:bg-red-500 hover:text-white ease-in-out transition-all duration-150"
            onClick={()=>removeItems(item.id)}>&times;</button>
           </div>
           
          
        </div>
          
        
   )
}