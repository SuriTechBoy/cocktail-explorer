import React, { Component } from 'react'
import CocktailImages from './CocktailImages'

export default class CocktailImagesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { drinks: null }
  }

  componentDidMount() {
    const category = this.props.match.params.category
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        else {
          throw Error(`Request rejected with status ${res.status}`)
        }
      })
      .then(data => this.updateImages(data.drinks))
      .catch(console.error)
  }

  updateImages = (drinksObject) => {
    const listDrinks = drinksObject.map(drink => {
      return {
        title: drink.strDrink,
        image: drink.strDrinkThumb,
        id: drink.idDrink
      }
    })
    this.setState({ drinks: listDrinks })
  }

  render() {
    const { category } = this.props.match.params
    return (
      <CocktailImages category={category} {...this.state} />
    )
  }
}