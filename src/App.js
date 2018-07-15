import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'


class BooksApp extends React.Component {

	state = {
		allBooks: []
	}

	changeBookState = (book, shelf) => (
		BooksAPI.update(book, shelf).then((allBooks) => {
			this.getAllBooks(allBooks)
		})
	)

	componentDidMount() {
		this.getAllBooks(this.state.allBooks)
		}

	getAllBooks = (allBooks) => (
		BooksAPI.getAll().then((allBooks) => {
		this.setState({ allBooks })
		})
	)

  render() {
    return (
      <div className="app">
				<Route exact path="/" render={() => (
					<ListBooks booksState={this.state.allBooks} onchangeBookState={this.changeBookState}/>
				)}/>
				<Route path="/search" render={() => (
					<SearchBooks booksState={this.state.allBooks} onchangeBookState={this.changeBookState}/>
				)}/>
      </div>
    )
  }
}

export default BooksApp
