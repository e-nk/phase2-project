import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import './product.css'
import Search from '../../context/Search/SearchItem'



function ProductGrid() {
    

    const {products} = useContext(StateContext)
  console.log(products)
    
    return(
        <div>
            {products && products.length > 0 && (<Search products={products}
            />)}
            
        </div>
    ) 
}

export default ProductGrid
