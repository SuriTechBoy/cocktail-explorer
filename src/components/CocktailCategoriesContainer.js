import React, { Component } from 'react'
import CocktailCategories from './CocktailCategories'
import SearchContainer from './SearchContainer'

// The logic to call and handle data from an API
export default class CocktailCategoriesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { cocktailCategories: null }
  }

  componentDidMount() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        else {
          throw Error(`Request rejected with status ${res.status}`)
        }
      })
      .then(data => this.updateCategories(data.drinks))
      .catch(console.error)
  }

  updateCategories = (cocktailCategoriesObjects) => {
    const cocktailCategories = cocktailCategoriesObjects.map(category =>
      Object.values(category).toString()
    )
    this.setState({ cocktailCategories: cocktailCategories })
  }

  render() {
    return (
      <div>
        <SearchContainer />
        <CocktailCategories {...this.state} />


      </div>

    )
  }
}