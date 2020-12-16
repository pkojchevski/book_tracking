import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Book from '../components/Book'
import * as BooksAPI from '../BooksAPI'
import * as util from '../shared'


class SearchBooks extends Component {
    state={
        query:'',
        error:'',
        books:[]
    }

    searchForBooks = (query) => {
       this.setState({query})
       query === '' ? this.setState({books:[], error:""}) : 
       BooksAPI.search(query)
           .then(data => {
               if(data && data.error) {
                   return this.setState({books:[], error:data.error})
               } 
                data.forEach(book => {
                    const filteredBook = this.props.booksWithShelfs.filter(el => el.id === book.id)
                    if(filteredBook.length > 0) {
                        book.shelf = filteredBook[0].shelf
                    } else {
                        book.shelf = 'none'
                    }
                })
                return this.setState({books:data, error:''})
            })
    }

    updateQuery(query) {
        util.debounce(this.searchForBooks(query),1000)
    }


    render() {

        const {books, query, error} = this.state                         
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author" 
                            value={query} 
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {
                        error !== '' ? (<p>No book matched typed query</p>)
                        : (
                        books.length > 0 ? (
                            books.map(book => (
                                <li key={book.id}>
                                    <Book book={book} 
                                        updateBookShelf={this.props.updateBookShelf} 
                                        value={book.shelf}/>
                                </li>
                        )))
                        : (
                           <p>Please type query on input to search for books</p>
                        ))
                    }
                    </ol>
                </div>
          </div>
        );
    }
}

SearchBooks.propTypes = {
    updateBookShelf:PropTypes.func.isRequired,
};

export default SearchBooks;
