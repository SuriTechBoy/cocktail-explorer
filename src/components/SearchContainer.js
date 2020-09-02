import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'

export default class SearchContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      drinks: [],
      loading: false,
      message: ''
    }
    this.cancel = ''
  }

  fetchSearchResults = (query) => {
    const API = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
    console.log(query)
    if (this.cancel) {
      this.cancel.cancel()
    }
    this.cancel = axios.CancelToken.source();

    axios.get(API, {
      cancelToken: this.cancel.token
    })
      .then(res => {
        const resultNotFoundMsg =
          !res.data.drinks.length
            ? 'There are no more search results. Please try a new search'
            : ''
        this.setState({
          drinks: res.data.drinks,
          message: resultNotFoundMsg,
          loading: false
        })
      })
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: 'Failed to fetch data, Please check network'
          })
        }
      })
  }

  handleChange = (e) => {
    const query = e.target.value
    const { message } = this.state
    console.log(message)

    if (query === '') {
      this.setState({ query: query, drinks: [], loading: false })
    }
    else if (message.length > 1) {
      this.setState({ query: query, drinks: [], loading: false }, () =>
        this.fetchSearchResults(query))

    }
    else {
      this.setState({ query: query, loading: true, message: '' }, () => {
        this.fetchSearchResults(query)
      })
    }
  }

  render() {
    return (
      <div>
        <Search {...this.state} handleChange={this.handleChange} />
      </div>
    )
  }
}