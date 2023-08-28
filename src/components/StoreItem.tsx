import { useShopping } from '../context/ShoppingCartContext';
import {FormatCurrency} from '../utility/FormatCurrency'

interface StorItemProps{
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export const StoreItem=({id,name,price,imgUrl}:StorItemProps)=>{
    const {getItemQuantity,increaseQuantity,decreaseQuantity,removeItems} =useShopping();
    const quantity:number=getItemQuantity(id);
    return(
        <div className="bg-gray-200 p-4 rounded-lg">
            <div className="mx-auto">
               <img src={imgUrl} className="w-[500px] h-[300px] object-cover rounded-lg"/>
            </div>
            <div className="flex align-center justify-between my-4 text-lg">
                <div>{name}</div>
                <div>{FormatCurrency(price)}</div>
            </div>
            
            <div className='text-center'>
               {quantity ===0 ?(
                <button className='bg-gray-500 text-white w-full py-2 rounded-lg hover:opacity-50' onClick={()=>increaseQuantity(id)}>Add to Card+</button>
               ):(
                <div className="flex flex-col items-center gap-2">
                <div className="space-x-4 text-lg">
                  <button className="bg-gray-500 px-3 py-1 hover:opacity-50  rounded-full text-white" onClick={()=>increaseQuantity(id)}>+</button>
                  <span>{quantity} in the cart</span>
                  <button className="bg-gray-500 px-3 py-1 hover:opacity-50  rounded-full text-white" onClick={()=>decreaseQuantity(id)}>-</button>
                </div>
                <button className="text-white bg-red-600 px-6 py-2 rounded-lg hover:opacity-50" onClick={()=>removeItems(id)}>Remove</button>
            </div>
               )}
            
            </div>
            
        </div>
    )
}