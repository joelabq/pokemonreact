import React from 'react'

function Pokemon(props){
      
    if (props.pokemon.id) {
        let abilities = props.pokemon.abilities.map(each => (
            <li>{each.ability.name} which is {each.is_hidden ? "hidden" : "visible" } ability</li>
        ))
        
        let heldItems = props.pokemon.held_items.map(each => (
            <li>{each.item.name}</li>
        ))

        let moves = props.pokemon.moves.map(each => (
            <li>{each.move.name}</li>
        ))

        let stats = props.pokemon.stats.map(each => (
            <li>{each.stat.name} - Base Stat: {each.base_stat}</li>
        ))

        let types = props.pokemon.types.map(each => (
            <li>{each.type.name} <button onClick={props.handleTypeList} value={each.type.name}>See More Of This Type</button></li>
        ))
    return(
        <div>
            <div><img src={props.pokemon.sprites.front_default} alt="Artwork"/></div>
            <div>ID: {props.pokemon.id} </div>
            <div>Name: {props.pokemon.name} </div>
            <div>Weight: {props.pokemon.weight} </div>
            <div>Base Experience: {props.pokemon.base_experience} </div>
            <div>Height: {props.pokemon.height} </div>
            <div>Abilities: <ul> {abilities} </ul> </div>
            <div>Held Items: <ul> {heldItems} </ul> </div>
            <div>Moves: <ul> {moves} </ul> </div>
            <div>Stats: <ul> {stats} </ul> </div>
            <div>types: <ul> {types} </ul> </div>
        </div>
    )
    }
    else return(<div></div>)
}

export default Pokemon