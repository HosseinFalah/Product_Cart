import ProductList from './Components/ProductList/ProductList';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { useState } from 'react';

const App = () => {
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
        //findeIndex
        const index = products.findIndex(item => item.id === id)
        //clone the selected index and update the quy:
        const product = {...products[index]}
        product.quantity++;
        //update products
        const Products = [...products]
        Products[index] = product
        setProducts(Products)
    }
    
    const decrementHandler = (id) => {
        //Finde Index
        const index = products.findIndex(item => item.id === id)
        //Clone the selected index and update the qty
        const product = {...products[index]}
        if (product.quantity === 1) {
            const filteredProducts = products.filter(item => item.id !== id)
            setProducts(filteredProducts)
        }else {
            //Update Product
            const Products = [...products]
            product.quantity--;
            Products[index] = product
            setProducts(Products)
        }
    }

    const changeCourseHandler = (id, e) => {
        //Finde Index Items
        const index = products.findIndex(item => item.id === id);
        //Clone the Selected index and update the quy
        const product = {...products[index]}
        product.title = e.target.value
        //update Products
        const Products = [...products]
        Products[index] = product
        setProducts(Products)
    }
    return (
        <div className='h-full min-h-screen bg-gray-50 relative'>
            <div className='mx-auto sm:px-0 h-full'>
                <div className='flex flex-col min-h-screen'>
                    <div className='flex flex-col min-h-screen items-center justify-start'>
                        <NavBar totalItem={products}/>
                        <ProductList products={products} 
                            onRemove={removeCartHandler}
                            onIncrement={incrementHandler}
                            onDecrement={decrementHandler}
                            onChange={changeCourseHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;