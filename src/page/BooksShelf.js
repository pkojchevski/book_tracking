import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from '../components/BookList'
import {wantToRead, currentlyReading, read} from '../shared'


class BooksShelf extends React.Component {
state = {
    shelfs:[{
        title:"Currently reading",
        bookShelf:currentlyReading
    },
    {
        title:"Want to read",
        bookShelf:wantToRead
    },
    {
        title:"Read",
        bookShelf:read
    },
]
}
    render() {
        const { books, updateBookShelf} = this.props
     return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                
                <div className="list-books-content">
                <div>
                    {
                        this.state.shelfs && this.state.shelfs.map((shelf,id) => (
                            <BookList key={id} listTitle={shelf.title} 
                                books={books && books.filter(el => el.shelf === shelf.bookShelf)} 
                                updateBookShelf={updateBookShelf}
                        />
                        ))
                    }
                </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className="button">Add a book</Link>
                </div>
          </div>
     )
}
}

BooksShelf.propTypes = {
    books:PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default BooksShelf