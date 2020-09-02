import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './CocktailCategories.css'
import { categories } from '../constants/data'

// Contains the markup and rendering
export default class CocktailCategories extends Component {
  renderCategories(cocktailCategories) {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {categories.map(category =>
            <Dropdown.Item key={category} href={`/categories/${category}`}>
              {category}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  render() {
    const { cocktailCategories } = this.props
    console.log(cocktailCategories)
    return (
      <div className='cocktail-categories'>
        {/* {!cocktailCategories && 'Loading...'} */}
        {this.renderCategories(cocktailCategories)}
      </div>
    )
  }
}