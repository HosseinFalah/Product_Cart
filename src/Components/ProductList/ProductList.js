import { useState } from "react";
import Product from "../Product/Product";

const ProductList = () => {
    const [products, setProducts] = useState([
        {id: 1, title: "React.js", price: "99$", quantity: 1},
        {id: 2, title: "Node.js", price: "89$", quantity: 1},
        {id: 3, title: "JavaScript.js", price: "79$", quantity: 1},
    ])

    const removeCartHandler = (id) => {
        const filteredProducts = products.filter(p => p.id !== id);
        setProducts(filteredProducts);
    }

    const incrementHandler = (id) => {
        const Products = [...products];
        const findeSelectedItem = Products.find(product => product.id === id);
        findeSelectedItem.quantity++;
        setProducts(Products);
    }
    
    const decrementHandler = (id) => {
        const Products = [...products];
        const findeSelectedItem = Products.find(product => product.id === id);
        if (findeSelectedItem.quantity === 1) {
            const filterCart = Products.filter(product => product.id !== id)
            setProducts(filterCart);
        }else{
            findeSelectedItem.quantity--;
            setProducts(Products);
        }
    }

    const changeCourseHandler = (id, e) => {
        const Products = [...products];
        const SelectedItem = Products.find(product => product.id === id);
        SelectedItem.title = e.target.value
        setProducts(Products)
    }

    return (
        <div className="w-full flex flex-col items-center">
            {products.map((product) => {
                return <Product key={product.id} 
                        product={product} 
                        onDelete={() => removeCartHandler(product.id)} 
                        onIncrement={() => incrementHandler(product.id)} 
                        onDecrement={() => decrementHandler(product.id)}
                        changeCourse={(event) => changeCourseHandler(product.id, event)}/>
            })}
        </div>
    );
}
 
export default ProductList;