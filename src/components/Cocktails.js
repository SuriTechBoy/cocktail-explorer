import React, { Component } from 'react'

const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
//const API2 = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'


export default class Cocktails extends Component {
  constructor(props) {
    super(props)
    this.state = { cocktailCategories: null }
  }

  // updateCocktailCategories = cocktailCategoriesObject => {
  //   const cocktailCategories = cocktailCategoriesObject.map(cocktailCategory =>
  //     Object.values(cocktailCategory).toString()
  //   )
  //   this.setState({ cocktailCategories })
  // }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const cocktailCategories = data.drinks.map(categories =>
          Object.values(categories).toString())
        this.updateCocktailCategories(cocktailCategories)
      })
      .catch(console.error)
  }

  updateCocktailCategories(cocktailCategories) {
    this.setState({ cocktailCategories })
  }

  render() {
    const { cocktailCategories } = this.state
    return (
      <div className='cocktails'>
        <h1>List of Cocktail Categories</h1>
        {!cocktailCategories && 'Loading...'}

        {cocktailCategories &&
          <ul>
            {cocktailCategories.map(category =>
              <li key={category}>{category}</li>
            )}
          </ul>}
      </div>
    )
  }
}
