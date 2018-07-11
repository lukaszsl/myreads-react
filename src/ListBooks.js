import React from 'react'
import * as BooksAPI from './BooksAPI'




class BookShelf extends React.Component {

state = {
	shelfName: this.props.shelfStatus
}

	render() {

const shelfName = this.state.shelfName
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.filter(function filterBooks(book) {
							if (book.shelf === shelfName) return book
						}).map((book) => (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
										<div className="book-shelf-changer">
											<select>
												<option value="move" disabled>Move to...</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.authors}</div>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

class ListBooks extends React.Component {


	state = {
		allBooks: []
	}

	componentDidMount() {
		BooksAPI.getAll().then((allBooks) => {
			this.setState({ allBooks })
		})
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
						<BookShelf books={this.state.allBooks} shelfTitle={"Currently Reading"} shelfStatus={"currentlyReading"}/>
						<BookShelf books={this.state.allBooks} shelfTitle={"Want to Read"} shelfStatus={"wantToRead"}/>
						<BookShelf books={this.state.allBooks} shelfTitle={"Read"} shelfStatus={"read"}/>
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
