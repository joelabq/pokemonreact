import React from 'react'
import './ViewAll.css';

const pokeAPI = 'https://pokeapi.co/api/v2/pokemon'

class ViewAll extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            pokemonURLs: [],
            pokemonImages: [],
            viewAll: false,
        }
    }
    async getURLs(apiURL = pokeAPI) {
        const response = await fetch(apiURL)
        const json = await response.json()
        this.setState({pokemonURLs: json})
        console.log(this.state.pokemonURLs.results)
        this.state.pokemonURLs.results.map(each => (
            this.getImages(each.url))
         )
         
    }
    
    async getImages(url){
        const response = await fetch(url)
        const json = await response.json()
        
       this.setState({
                pokemonImages: [...this.state.pokemonImages,{name: json.name, image: json.sprites.front_default, url: url}]
                }
                )
            
        
    }

    handleViewAll = (e) => {
        e.preventDefault();
        this.setState({pokemonImages: []})
        this.getURLs();
        this.setState({viewAll: true})
        this.props.onViewAll();
      }
    handleNextPage = (e) => {
        this.setState({pokemonURLs: []})
        this.setState({pokemonImages: []})
        
        this.getURLs(this.state.pokemonURLs.next)
    }
    handleViewPokemon = (searchTerm) => {
        this.setState({viewAll: false})
        this.setState({pokemonURLs: []})
        this.props.onViewPokemon(searchTerm)
    }
    render(){
    
       if (this.state.viewAll ) {
            let pokemon = this.state.pokemonImages.map(each => (
                <div><img src={each.image} alt={each.name}/> {each.name} <button onClick={() => this.handleViewPokemon(each.name)}>View Pokemon</button></div>
            ))
                
            return(
                
                <div>
                    <a href="#" onClick={this.handleViewAll}>View All Pokemon</a> 
                    {pokemon}
                    {(this.state.pokemonImages.length > 0) ? (<button onClick = {this.handleNextPage}>Next 20</button>) : ""}
                </div>
            )
            }
        else { return (<div>
                    <a href="#" onClick={this.handleViewAll}>View All Pokemon</a> 
                        </div>)}
    }
}

export default ViewAll