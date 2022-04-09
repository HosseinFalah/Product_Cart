import { useProducts } from '../Providers/ProductsProviders';
import './NavBar.css'

const NavBar = () => {
    const products  = useProducts();
    const totalItem = products
    return (
        <header className="flex items-center justify-center w-full bg-gray-300 h-height-NavBar">
            <p className="text-neutral-800 text-3xl">Shopping Cart</p>
            <h2 className="relative bg-purple-500 text-white badge-cart flex items-center justify-center -top-2 -right-3">{totalItem.length}</h2>
        </header>
    );
}
export default NavBar;