import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from '../components/BookList'
import * as util from '../shared'


const BooksShelf = ({books, updateBookShelf}) => 
     (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <BookList listTitle="Currently Reading" 
                        books={books.filter(el => el.shelf === util.currentlyReading)} 
                        updateBookShelf={updateBookShelf}
                    />
                    <BookList listTitle="Want to Read" 
                        books={books.filter(el => el.shelf === util.wantToRead)} 
                        updateBookShelf={updateBookShelf}
                    />
                    <BookList listTitle="Read" 
                        books={books.filter(el => el.shelf === util.read)} 
                        updateBookShelf={updateBookShelf}
                    />
                </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className="button">Add a book</Link>
                </div>
          </div>
        )

BooksShelf.propTypes = {
    books:PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default BooksShelf