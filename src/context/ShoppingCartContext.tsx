import {ReactNode, createContext, useContext, useState} from 'react'
import { ShoppingCart } from '../components/ShoppingCart';


interface ShoppingCartContextProps{
    getItemQuantity:(id:number)=>number,
    increaseQuantity:(id:number)=>void,
    decreaseQuantity:(id:number)=>void,
    removeItems:(id:number)=>void,
    OpenCart:()=>void,
    CloseCart:()=>void,
}

interface CartItems{
    id:number,
    quantity:number,
}
interface ShoppingCartProviderProps{
    children:ReactNode
}
const ShoppingCartContext=createContext({} as ShoppingCartContextProps);
export function useShopping () {
     return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider=({children}:ShoppingCartProviderProps)=>{
     const [cartItems,setcartItems]=useState<CartItems[]>([])
     const[isopen,setisopen]=useState(false)

     const OpenCart=()=>setisopen(true)
     const CloseCart=()=>setisopen(false)
     

    const getItemQuantity=(id:number)=>{
          return cartItems.find(item=>item.id===id)?.quantity || 0
    }

    const increaseQuantity=(id:number)=>{
        setcartItems(currItems=>{
            if(currItems.find(item=>item.id===id)==null){
                return [...currItems , {id, quantity:1}]
            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    
    const decreaseQuantity=(id:number)=>{
        setcartItems(currItems=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){
                return currItems.filter(item=>item.id!==id)
            }else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity-1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const removeItems=(id:number)=>{
        setcartItems(curritem=>{
            return curritem.filter(item=>item.id!==id)
        }
        )
    }

    return(
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeItems,
            OpenCart,
            CloseCart
        }}>
            {children}
           <ShoppingCart isopen={isopen}/>
        </ShoppingCartContext.Provider>
    )
}