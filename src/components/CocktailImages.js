import React from 'react'
import { Link } from 'react-router-dom'
import './CocktailImages.css'

export default function CocktailImages(props) {
  const renderImages = (drinks) => {
    return (
      drinks.map(drink => (
        <div className='drink' key={drink.id}>
          <Link to={`/drinks/${drink.id}`}>
            <h6>{drink.title}</h6>
          </Link>
          <a href={drink.image}>
            <img className='img-render' src={drink.image} alt={drink.title} />
          </a>
        </div>
      ))
    )
  }

  const { category, drinks } = props
  return (
    <div className='cocktail-images'>
      <h6>The {category} category</h6>
      <Link to='/'>Back to Explorer</Link>
      <div className='images-content'>
        {!drinks && 'Loading...'}
        {drinks && renderImages(drinks)
        }
      </div>
    </div>
  )
}
