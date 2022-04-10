import ProductList from './Components/ProductList/ProductList';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ProductsProviders from './Components/Providers/ProductsProviders';
import Filter from './Components/Filter/Filter';

const App = () => {
    return (
        <div className='h-full min-h-screen bg-gray-50 relative'>
            <div className='mx-auto sm:px-0 h-full'>
                <div className='flex flex-col min-h-screen'>
                    <div className='flex flex-col min-h-screen items-center justify-start'>
                        <ProductsProviders>
                            <NavBar/>
                            <Filter/>
                            <ProductList />
                        </ProductsProviders>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;