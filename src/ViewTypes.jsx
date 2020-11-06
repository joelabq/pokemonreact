import React from 'react'

function ViewTypes(props){
    //props.types.pokemon render as a ul
    if (props.types.length > 0)
    {
    let printTypes = props.types.pokemon.map(each => <li> {each.name}</li>)
    
    return(
        <div>
            <ul>{printTypes}</ul>
        </div>
    )
    }
    else {
        return (<div></div>)
    }
}

export default ViewTypes