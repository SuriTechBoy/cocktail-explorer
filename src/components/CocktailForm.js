import React, { Component } from 'react'

export default class CocktailForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <form>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='Beer'>Beer</option>
            <option value='Cocoa'>Cocoa</option>
            <option value='Coffee / Tea'>Coffee / Tea</option>
          </select>
        </label>
      </form>
    )
  }
}