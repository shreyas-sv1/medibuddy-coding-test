import { useState } from "react";
function SearchBar({onSearch}) {
    const[query, setQuery]=useState("");
    function handleSearch(){
        if(!query.trim())
            return;
        onSearch(query.trim());
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Search for medicine by brand name"
                value={query}
                onChange={(event) =>
                    setQuery(event.target.value)
                }
            />
            <button onClick={handleSearch}>Search</button>   
        </div>
    );
}
export default SearchBar;