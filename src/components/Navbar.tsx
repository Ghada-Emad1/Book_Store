import {NavLink} from 'react-router-dom'
import {BsCart3} from 'react-icons/bs'
export const Navbar=()=>{
    return(
        <div className='flex justify-between items-center p-4 mx-auto bg-slate-200 sticky top-0 shadow-lg'>
            <div className='space-x-10 text-bold text-lg text-blue-950 '>
              <NavLink to="/" >Home</NavLink>
              <NavLink to="/store">Store</NavLink>
              <NavLink to="/about">About</NavLink>
            </div>
            <div className='relative flex'>
                <div className='border border-gray-500 rounded-lg px-3 py-1 cursor-pointer hover:bg-slate-400'>
                <BsCart3 size={30}/>
                </div>
               
                <div className='w-[1.5rem] h-[1.5rem] bg-red-500 absolute bottom-0 right-0 rounded-full 
               flex  justify-items-center justify-center text-white translate-x-[25%] translate-y-[25%] cursor-pointer'>+ </div>
        
            </div>
            
        </div>
    )
}