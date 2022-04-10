import {BsTrash} from 'react-icons/bs';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import './Product.css'

const Product = ({product, onDelete, onDecrement, onIncrement}) => {
    return (
        <div className="flex items-center justify-between border-2 border-gray-200 p-5 m-5 w-3/4 shadow-xl">
            <p>Product Name: {product.title}</p>
            <p>Product Price: <span className="text-green-600">{product.price}</span></p>
            <div className='flex flex-col items-center'>
                <button className="mb-1" onClick={onIncrement}><i className="text-green-600 cursor-pointer"><FaAngleUp/></i></button>
                <span className="quantity">{product.quantity}</span>
                <button className="mt-1" onClick={onDecrement}><i className="text-red-600 cursor-pointer">{product.quantity > 1 ? <FaAngleDown/> : <BsTrash/>}</i></button>
            </div>
            <button className='bg-red-600 p-3 text-white rounded-md' onClick={onDelete}><BsTrash/></button>
        </div>
    );
}
 
export default Product;