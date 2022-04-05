import ProductList from './Components/ProductList/ProductList';
import './App.css';

const App = () => {
    return (
        <div className='h-full min-h-screen bg-gray-50 relative'>
            <div className='mx-auto sm:px-0 h-full'>
                <div className='flex flex-col min-h-screen'>
                    <div className='flex flex-col min-h-screen items-center justify-start mt-5'>
                        <h1 className="text-4xl">Shopping App</h1>
                        <ProductList/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;