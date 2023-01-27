import React, {useContext} from 'react'
import { StateContext } from '../../context/GlobalState'
import ProductItem from './ProductItem'
import './product.css'
import Search from '../../context/Search/SearchItem'


function ProductGrid() {
    const {products} = useContext(StateContext)
    
    return(
        <div>
            <Search/>
        <section className="products">

            {
                products.map((product) => <ProductItem key={product.id} product={product}/>)
            }
        </section>
        </div>
    ) 
}

export default ProductGrid
