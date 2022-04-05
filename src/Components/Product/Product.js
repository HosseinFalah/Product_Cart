import {BsTrash} from 'react-icons/bs';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import './Product.css'

const Product = ({product, onDelete, onDecrement, onIncrement, changeCourse}) => {
    return (
        <div className="flex items-center justify-between border-2 border-gray-200 p-5 m-5 w-3/4 shadow-xl">
            <p>Product Name: {product.title}</p>
            <input className="border-2 border-gray-500 outline-none text-orange-500 p-2 rounded-sm focus:border-violet-700" onChange={changeCourse} value={product.title} type="text"/>
            <p>Product Price: {product.price}</p>
            <div className='flex flex-col items-center'>
                <button className="mb-1" onClick={onIncrement}><i className="text-green-600 cursor-pointer"><FaAngleUp/></i></button>
                <span className="quantity">{product.quantity}</span>
                <button className="mt-1" onClick={onDecrement}><i className="text-red-600 cursor-pointer"><FaAngleDown/></i></button>
            </div>
            <button className='bg-red-600 p-3 text-white rounded-md' onClick={onDelete}><BsTrash/></button>
        </div>
    );
}
 
export default Product;