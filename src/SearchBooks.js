import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends React.Component {
	state = {
		searchedBooks: [],
		query: ""
	}

	updateQuery = (query) => {
		this.setState({ query: query })
	}

	getSerchedBooks = (query) => (
		BooksAPI.search(query).then((searchedBooks) => {
			this.setState({ searchedBooks })
		})
	)

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => (
								this.getSerchedBooks(event.target.value) &&
								this.updateQuery(event.target.value)
							)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.searchedBooks.map(searchedBook => {
							let result = this.props.booksState.find(book => book.id === searchedBook.id)
							return (
								<li key={searchedBook.id}>
									<div className="book">
										<div className="book-top">
											<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${searchedBook.imageLinks.smallThumbnail})` }}></div>
											<div className="book-shelf-changer">
												<select value={result ? result.shelf : "none"} onChange={(e) => (this.props.onchangeBookState(searchedBook, e.target.value))}>
													<option value="move" disabled>Move to...</option>
													<option value="currentlyReading">Currently Reading</option>
													<option value="wantToRead">Want to Read</option>
													<option value="read">Read</option>
													<option value="none">None</option>
												</select>
											</div>
										</div>
										<div className="book-title">{searchedBook.title}</div>
										<div className="book-authors">{searchedBook.authors}</div>
									</div>
								</li>
							)
						})}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks
