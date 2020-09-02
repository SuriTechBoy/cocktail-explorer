import React, { Component } from 'react'
import './Search.css'
import { Link } from 'react-router-dom'

export default class Search extends Component {
  renderSearchResults = (drinks, message, query) => {
    if (Object.keys(drinks).length && drinks.length) {
      return (
        drinks.map(drink => (
          <div className='results-container' key={drink.idDrink}>
            <Link to={`/drinks/${drink.idDrink}`}>
              <h6 className='image-title'>{drink.strDrink}</h6>
            </Link>
            <a href={drink.strDrinkThumb} className='result-item'>
              <div className='image-wrapper'>
                <img className='img-render' src={drink.strDrinkThumb} alt={drink.strDrink} />
              </div>
            </a>
          </div>
        )
        ))
    }

    else if (message) {
      return <h6>{`No cocktail named ${query} found`}</h6>
    }


  }

  render() {
    const { query, drinks, message, handleChange } = this.props
    return (

      <div className='container'>
        <h2 className='heading'>Cocktail Search</h2>
        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            id='search-input'
            value={query}
            onChange={handleChange}
            placeholder='Search..' />
          <i className='fa fa-search search-icon'></i>
        </label>
        {this.renderSearchResults(drinks, message, query)}
      </div>
    )
  }
}



