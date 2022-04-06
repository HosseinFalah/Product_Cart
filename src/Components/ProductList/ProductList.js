import Product from "../Product/Product";
import './ProductList.css'

const ProductList = ({products, onRemove, onIncrement, onDecrement, onChange}) => {
    return (
        <div className="w-full flex flex-col items-center">
            {!products.length && <div className="w-3/4 h-height mt-5 rounded-lg bg-gradient-to-br from-indigo-300 to-violet-900 text-white text-2xl flex items-center justify-center">There Are No Products In Your Cart</div>}
            {products.map((product) => {
                return <Product key={product.id} 
                        product={product} 
                        onDelete={() => onRemove(product.id)} 
                        onIncrement={() => onIncrement(product.id)} 
                        onDecrement={() => onDecrement(product.id)}
                        changeCourse={(event) => onChange(product.id, event)}/>
            })}
        </div>
    );
}
 
export default ProductList;