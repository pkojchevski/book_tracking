import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import BookList from '../components/BookList'


class SearchBooks extends Component {
    state={
        query:''
    }

    updateQuery(query) {
        this.setState({query:query.trim()})
    }

    clearQuery = () => {
        this.updateQuery('')
      }

    render() {

        const {books} = this.props
        const {query} = this.state
        const searchedBooks = query === '' ? books : 
                       books.filter(el => el.title.toLowerCase().includes(query.toLowerCase()) || 
                                          el.authors.join().toLowerCase().includes(query.toLowerCase()))
                                          
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
                    <BookList  
                              books={searchedBooks} 
                              setToCurrReading={this.props.setToCurrReading} 
                              setToWantToRead={this.props.setToWantToRead} 
                              setToRead={this.props.setToRead} 
                              setToNone={this.props.setToNone}
                    />
                    </ol>
                </div>
          </div>
        );
    }
}

SearchBooks.propTypes = {
        books:PropTypes.array.isRequired,
        setToCurrReading:PropTypes.func.isRequired,
        setToWantToRead:PropTypes.func.isRequired,
        setToRead:PropTypes.func.isRequired,
        setToNone:PropTypes.func.isRequired
};

export default SearchBooks;
