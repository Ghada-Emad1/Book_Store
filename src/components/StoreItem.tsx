import {FormatCurrency} from '../utility/FormatCurrency'

interface StorItemProps{
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export const StoreItem=({id,name,price,imgUrl}:StorItemProps)=>{
    return(
        <div className="bg-gray-200 p-4 rounded-lg">
            <div className="mx-auto">
               <img src={imgUrl} className="w-[500px] h-[300px] object-cover rounded-lg"/>
            </div>
            <div className="flex align-center justify-between my-4 text-lg">
                <div>{name}</div>
                <div>{FormatCurrency(price)}</div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="space-x-4 text-lg">
                  <button className="bg-gray-500 px-3 py-1 hover:opacity-50  rounded-full text-white">+</button>
                  <span>1 in the cart</span>
                  <button className="bg-gray-500 px-3 py-1 hover:opacity-50  rounded-full text-white">-</button>
                </div>
                <button className="text-white bg-red-600 px-6 py-2 rounded-lg hover:opacity-50">Remove</button>
            </div>
        </div>
    )
}