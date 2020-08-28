import React from 'react'
import { Link } from 'react-router-dom'

export default function CocktailImages(props) {
  return (
    <div className='cocktail-images'>
      <h1>Cocktail Images</h1>

      This page will show images of a {props.match.params.category} cocktail

      <Link to='/'> Back to index</Link>
    </div>
  )
}