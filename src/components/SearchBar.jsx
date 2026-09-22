import { useState } from "react";

function SearchBar() {
    const[query, setQuery]=useState("");
    function handleSearch(){
        console.log("searching for :",query);
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