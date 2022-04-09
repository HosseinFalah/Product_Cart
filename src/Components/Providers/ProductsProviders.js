import React, { useContext, useReducer } from 'react';

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();
const initialState = [
    {id: 1, title: "React.js", price: "99$", quantity: 1},
    {id: 2, title: "Node.js", price: "89$", quantity: 1},
    {id: 3, title: "JavaScript.js", price: "79$", quantity: 1},
]

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":{
            //findeIndex
            const index = state.findIndex(item => item.id === action.id)
            //clone the selected index and update the quy:
            const product = {...state[index]}
            product.quantity++;
            //update products
            const updatedProducts = [...state]
            updatedProducts[index] = product
            return updatedProducts
        }

        case "decrement":{
            //Finde Index
            const index = state.findIndex(item => item.id === action.id)
            //Clone the selected index and update the qty
            const product = {...state[index]}
            if (product.quantity === 1) {
                const filteredProducts = state.filter(item => item.id !== action.id)
                return filteredProducts
            }else {
                //Update Product
                const updatedProducts = [...state]
                product.quantity--;
                updatedProducts[index] = product
                return updatedProducts
            }
        }
        
        case "edit":{
            //Finde Index Items
            const index = state.findIndex(item => item.id === action.id);
            //Clone the Selected index and update the quy
            const product = {...state[index]}
            product.title = action.event.target.value
            //update Products
            const updatedProducts = [...state]
            updatedProducts[index] = product
            return updatedProducts
        }

        case "remove":{
            const filteredProducts = state.filter(p => p.id !== action.id);
            return filteredProducts
        }
        default:
            return state
    }
}

const ProductsProviders = ({children}) => {
    const [products, dispatch] = useReducer(reducer, initialState)
    return (
        <ProductsContext.Provider value={products}>
            <ProductsContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductsContextDispatcher.Provider>
        </ProductsContext.Provider>
    );
}

export default ProductsProviders;

export const useProducts = () => useContext(ProductsContext)

export const useProductsActions = () => {
    return useContext(ProductsContextDispatcher)
}