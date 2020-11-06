import React from 'react'
import SearchBox from './searchbox'
import Pokemon from './Pokemon'
import ViewAll from './ViewAll'
import ViewTypes from './ViewTypes'


const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'
//types https://pokeapi.co/api/v2/type/normal

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      currentSearch: '',
      pokemon: [],
      types: [],
      currentType: ''
      
    }
  }
   

    async searchPokemon(search = this.state.currentSearch) {
      const response = await fetch(pokeAPI+search)
      const json = await response.json()
      this.setState({pokemon: json})
    }
    async searchTypes() {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${this.state.currentType}`)
      const json = await response.json()
      this.setState({types: json})
    }

 
    handleSearch = (e) => {
      e.preventDefault();
      this.setState({pokemon: []})
      this.searchPokemon();
      this.searchTypes();
    }

    handleViewPokemon = (name) => {

      this.setState({pokemon: []})
      this.searchPokemon(name);
    }


    handleInput = (e) => {
      this.setState({
              currentSearch: e.target.value 
      })
    }
    clearSearch = () => {
      this.setState({pokemon: [] })

    }
    handleTypeList = (e) => {
      //alert(e.target.value)
      e.preventDefault()
      //this.clearSearch()
      this.setState({currentType: e.target.value})
     
      this.searchTypes()
    }
    render() {
     
      return (
        <div>
          
          <ViewAll onViewPokemon={this.handleViewPokemon} onViewAll={this.clearSearch} />
          <SearchBox handleSearch={this.handleSearch} handleInput = {this.handleInput}/>
          <br/>
          <Pokemon pokemon={this.state.pokemon} handleTypeList={this.handleTypeList} />
          <ViewTypes types = {this.state.types}/>
      </div>

      )
      
    }
  
  }
  


export default App;
