import React from 'react'

function SearchBox(props){
    return (
        <div>
        <form >
            <label>Search for pokemon: </label>
            <input type="text" name="pokeSearch" value = {props.pokeSearch} onChange={props.handleInput}/>
            <button onClick={props.handleSearch}>Submit</button>
        </form>
        </div>
    );
}

export default SearchBox