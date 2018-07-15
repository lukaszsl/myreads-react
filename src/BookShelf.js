import React from 'react'

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
											<select onChange={(e) => (this.props.onchangeBookState(book, e.target.value))}>
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

export default BookShelf
