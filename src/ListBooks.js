import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class ListBooks extends React.Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							books={this.props.booksState}
							onchangeBookState={this.props.onchangeBookState}
							shelfTitle={"Currently Reading"} shelfStatus={"currentlyReading"} />
						<BookShelf
							books={this.props.booksState}
							onchangeBookState={this.props.onchangeBookState}
							shelfTitle={"Want to Read"}
							shelfStatus={"wantToRead"} />
						<BookShelf
							books={this.props.booksState}
							onchangeBookState={this.props.onchangeBookState}
							shelfTitle={"Read"}
							shelfStatus={"read"} />
					</div>
				</div>
				<div className="open-search">
					<Link
						to="/search"
						>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks
