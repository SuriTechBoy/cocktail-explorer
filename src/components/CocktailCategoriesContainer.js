import React, { Component } from 'react'
import CocktailCategories from './CocktailCategories'

// This class contains the logic to fetch and handle data
export default class CocktailCategoriesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { cocktailCategories: null }
  }

  // Convert the array of objects into an array of strings
  // Map over the array of then convert with Object.values
  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => response.json())
      .then(data => {
        const cocktailCategories = data.drinks.map(category =>
          Object.values(category).toString())
        console.log(cocktailCategories)
        this.updateCocktailCategories(cocktailCategories)

      })
      .catch(console.error)
  }

  // Update the state when API fetch succesful
  updateCocktailCategories(cocktailCategories) {
    this.setState({ cocktailCategories })
  }

  render() {
    return <CocktailCategories {...this.state} />
  }
}