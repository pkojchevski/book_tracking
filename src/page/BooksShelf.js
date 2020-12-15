import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import BookList from '../components/BookList'
import * as util from '../shared'


const BooksShelf = (props) => 
     (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <BookList listTitle="Currently Reading" 
                              books={props.books.filter(el => el.shelf === util.currentlyReading)} 
                              setToCurrReading={props.setToCurrReading} 
                              setToWantToRead={props.setToWantToRead} 
                              setToRead={props.setToRead} 
                              setToNone={props.setToNone}
                    />
                    <BookList listTitle="Want to Read" 
                              books={props.books.filter(el => el.shelf === util.wantToRead)} 
                              setToCurrReading={props.setToCurrReading} 
                              setToWantToRead={props.setToWantToRead} 
                              setToRead={props.setToRead} 
                              setToNone={props.setToNone}
                    />
                    <BookList listTitle="Read" 
                              books={props.books.filter(el => el.shelf === util.read)} 
                              setToCurrReading={props.setToCurrReading} 
                              setToWantToRead={props.setToWantToRead} 
                              setToRead={props.setToRead} 
                              setToNone={props.setToNone}
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
    setToCurrReading:PropTypes.func.isRequired,
    setToWantToRead:PropTypes.func.isRequired,
    setToRead:PropTypes.func.isRequired,
    setToNone:PropTypes.func.isRequired
}

export default BooksShelf