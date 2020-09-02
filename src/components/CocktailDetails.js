import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CocktailDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`)
      .then(res => res.json())
      .then(data => this.setState({ ...data.drinks[0] }))
      .catch(console.error)
  }

  render() {
    const details = this.state
    return (
      <div>
        <h2>Cocktail Details</h2>
        <Link to='/'>Back to Explorer</Link>
        <p>Information about {details.strDrink}</p>

        <div>
          {Object.entries(details).map(detail => (
            <div key={detail.toString()}>
              {detail[1] &&
                detail[0] !== 'idDrink' &&
                detail[1] !== null && (
                  <p className='detail' >
                    {detail[0].split('str').pop() + ': ' + detail[1]}
                  </p>
                )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}