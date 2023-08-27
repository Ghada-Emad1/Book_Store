import { StoreItem } from '../components/StoreItem'
import data from '../data/books.json'
export const Store=()=>{
    return(
        <div>
            <h1>Store</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4'>
              {data.map(item=>(
                <div key={item.id}>
                   <StoreItem {...item}/>
                </div>
              ))}
            </div>
        </div>
    )
}