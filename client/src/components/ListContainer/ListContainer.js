import React, { Component } from 'react'
import TmdbClient from '../../TmdbClient'

class ListContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoaded: false,
      lists: {},
      error: {}
    }
  }

  getLists = () => {
    TmdbClient.getLists()
      .then((lists) => {
        this.setState({
          isLoaded: true,
          lists: lists
        })
        console.log('hello', lists)
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error
        })
      }
      )
  }

  componentDidMount () {
    this.getLists()
  }

  render () {
    const { error, isLoaded, lists } = this.state
    const list = lists.results

    if (error) {
      return <div>Erreur: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Chargement ...</div>
    } else {
      return (
        <ul>
          <li>
            <h1>{list.name}</h1>
            <p>{lists.description}</p>
          </li>
        </ul>
      )
    }
  }
}

export default ListContainer
