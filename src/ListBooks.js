import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'


class ListBooks extends React.Component {


	state = {
		allBooks: []
	}

	changeBookState = (book, shelf) => (
		BooksAPI.update(book, shelf).then((allBooks) => {
			console.log(shelf)
			this.getAllBooks(allBooks)
		})
	)

	getAllBooks = (allBooks) => (
		BooksAPI.getAll().then((allBooks) => {
		this.setState({ allBooks })
		})
	)

	componentDidMount() {
		this.getAllBooks(this.state.allBooks)
		}


	render() {
		console.log(this.state.allBooks)
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf books={this.state.allBooks} onchangeBookStete={this.changeBookState} shelfTitle={"Currently Reading"} shelfStatus={"currentlyReading"}/>
						<BookShelf books={this.state.allBooks} onchangeBookStete={this.changeBookState} shelfTitle={"Want to Read"} shelfStatus={"wantToRead"}/>
						<BookShelf books={this.state.allBooks} onchangeBookStete={this.changeBookState} shelfTitle={"Read"} shelfStatus={"read"}/>
					</div>
				</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
		)
	}
}

export default ListBooks
