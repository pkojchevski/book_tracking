import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

const BookList = ({listTitle, books, updateBookShelf}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{listTitle}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
               {
                   books && books.length > 0 ? 
                   (
                        books.map(book => (
                            <li key={book.id}>
                                <Book 
                                    book={book}
                                    updateBookShelf={updateBookShelf}
                                />
                            </li>
                    ) 
                                ))
                    : (
                        <p>There are no books in this shelf</p>
                      )
                    }
            </ol>
            </div>
      </div>
    );
}

BookList.propTypes = {
    listTitle: PropTypes.string,
    books:PropTypes.array.isRequired,
    updateBookShelf:PropTypes.func.isRequired,
}


export default BookList;
