import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// This class contains markup
export default class CocktailCategories extends Component {
  renderCocktailCategories(category) {
    return (
      <li key={category}>
        <Link to={`/cocktails/${category}`}>{category}</Link>
      </li>
    )
  }

  render() {
    const { cocktailCategories } = this.props
    return (
      <div className='cocktail-categories'>
        <h1>Cocktail Categories</h1>

        {!cocktailCategories && 'Loading...'}

        {cocktailCategories &&
          <ul>{cocktailCategories.map(
            this.renderCocktailCategories)}
          </ul>
        }
      </div>
    )
  }
}
