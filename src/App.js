import React from 'react'
import SearchBox from './searchbox'
import Pokemon from './Pokemon'
import ViewAll from './ViewAll'

const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/'

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      currentSearch: '',
      pokemon: []
    }
  }
    // async componentDidMount() {
    //   const response = await fetch(pokeAPI+this.state.currentSearch)
    //   const json = await response.json()
    //   this.setState({pokemon: json})
    // }

    async searchPokemon() {
      const response = await fetch(pokeAPI+this.state.currentSearch)
      const json = await response.json()
      this.setState({pokemon: json})
    }

    handleSearch = (e) => {
      e.preventDefault();
      this.setState({pokemon: []})
      this.searchPokemon();
      
      
    }
    handleInput = (e) => {
      this.setState({
              currentSearch: e.target.value 
      })
    }
    handleViewAll = (e) => {
      e.preventDefault();
      alert("You Clicked the link!!!")
    }
    render() {
      return (
        <div>
          <ViewAll handleViewAll={this.handleViewAll}/>
          <SearchBox handleSearch={this.handleSearch} handleInput = {this.handleInput}/>
          <br/>
          <Pokemon pokemon={this.state.pokemon}/>
      </div>

      )
      
    }
  
  }
  


export default App;
