import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Book from '../components/Book'
import * as BooksAPI from '../BooksAPI'


class SearchBooks extends Component {
    state={
        query:'',
        error:'',
        books:[]
    }

    updateQuery(query) {
        this.setState({query})

        BooksAPI.search(query)
           .then(data => {
               if(data && data.error) {
                   return this.setState({books:[], error:data.error})
               }
               
                return this.setState({books:data, error:''})
            })
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
                                    <Book book={book} updateBookShelf={this.props.updateBookShelf} value="none"/>
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
