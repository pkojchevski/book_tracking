import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

const BookList = ({listTitle, books, setToCurrReading, setToNone, setToWantToRead, setToRead}) => {
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
                                    setToCurrReading={setToCurrReading} 
                                    setToWantToRead={setToWantToRead} 
                                    setToRead={setToRead} 
                                    setToNone={setToNone}
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
    setToCurrReading:PropTypes.func.isRequired,
    setToWantToRead:PropTypes.func.isRequired,
    setToRead:PropTypes.func.isRequired,
    setToNone:PropTypes.func.isRequired
}


export default BookList;
