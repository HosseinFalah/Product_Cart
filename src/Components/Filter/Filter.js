import React from 'react';
import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProviders";
import SelectComponent from '../../Common/Select/Select';
import SearchBar from '../../Common/Search/Search';

const filterOption = [
    {value: "", label: "All"},
    {value: "Xs", label: "Xs"},
    {value: "S", label: "S"},
    {value: "M", label: "M"},
    {value: "L", label: "L"},
    {value: "XL", label: "XL"},
    {value: "XXL", label: "XXL"},
]

const SortOptions = [
    {value: "highest", label: "highest"},
    {value: "lowest", label: "lowest"},
]

const Filter = () => {
    const dispatch = useProductsActions();
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    const filterHandler = (selectedOption) => {
        dispatch({type: "filter", selectedOption})
        dispatch({type: "sort", selectedOption: sort})
        setFilter(selectedOption)
    } 
    
    const changeSortPriceHandler = (selectedOption) => {
        dispatch({type: "sort", selectedOption})
        setSort(selectedOption)
    }

    return (
        <div className="flex flex-col items-center justify-between w-3/4 mt-2">
            <SearchBar filter={filter}/>
            <div className="flex items-center justify-between mt-6 mb-3 w-full">
                <p className="">Filter Products Based On:</p>
                <SelectComponent 
                    title="Filter By Size:"
                    value={filter} 
                    onChange={filterHandler}
                    options={filterOption}/>
                <SelectComponent 
                    title="Sort By Price:"
                    value={sort} 
                    onChange={changeSortPriceHandler}
                    options={SortOptions}/>
            </div>
        </div>
    );
}
 
export default Filter;