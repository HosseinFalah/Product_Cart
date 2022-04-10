import React, { useContext, useReducer } from 'react';
import {productsData} from '../../db/products'
import _ from 'lodash'

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

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

        case "search": {
            const value = action.event.target.value.trim();
            if (value === "") {
                return state
            } else {
                const FilteredProducts = state.filter(p => p.title.toLowerCase().includes(value.toLowerCase()))
                return FilteredProducts
            }
        }

        case "filter": {
            const value = action.selectedOption.value;
            if (value === "") {
                return productsData
            } else {
                const updatedProducts = productsData.filter(p => p.availableSizes.indexOf(value) >= 0)
                return updatedProducts;
            }
        }

        case "sort": {
            const value = action.selectedOption.value;
            if (value === "lowest") {                
                return _.orderBy(state, ["price"], ["asc"])
            } else {
                return _.orderBy(state, ["price"], ["desc"])
            }
        }
        default:
            return state
    }
}

const ProductsProviders = ({children}) => {
    const [products, dispatch] = useReducer(reducer, productsData)
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