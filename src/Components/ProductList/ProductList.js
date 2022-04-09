import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProviders";
import './ProductList.css'

const ProductList = () => {
    const products = useProducts()
    const dispatch = useProductsActions()

    return (
        <div className="w-full flex flex-col items-center">
            {!products.length && <div className="w-3/4 h-height mt-5 rounded-lg bg-gradient-to-br from-indigo-300 to-violet-900 text-white text-2xl flex items-center justify-center">There Are No Products In Your Cart</div>}
            {products.map((product) => {
                return <Product key={product.id} 
                        product={product} 
                        onDelete={() => dispatch({type: "remove", id: product.id})} 
                        onIncrement={() => dispatch({type: "increment", id: product.id})} 
                        onDecrement={() => dispatch({type: "decrement", id: product.id})}
                        changeCourse={(e) => dispatch({type: "edit", id: product.id, event: e})}/>
            })}
        </div>
    );
}
 
export default ProductList;