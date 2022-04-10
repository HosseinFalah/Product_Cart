import { useState } from "react";
import { useProductsActions } from "../../Components/Providers/ProductsProviders";


const SearchBar = ({filter}) => {
    const dispatch = useProductsActions()
    const [value, setValue] = useState("");
    const changeSearchHandler = (e) => {
        dispatch({type: "filter", selectedOption: filter})
        dispatch({type: "search", event: e})
        setValue(e.target.value)
    }
    return (
        <div className="flex items-center justify-center mt-5 w-full">
            <div className="">Search For : </div>
            <input className="outline-none border-2 text-purple-600 rounded-md px-5 py-2 ml-2 w-1/4 focus:border-purple-400" type="text" placeholder="Search For ..." onChange={changeSearchHandler} value={value}/>
        </div>
    );
}
 
export default SearchBar;