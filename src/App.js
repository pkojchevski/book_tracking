import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import BooksShelf from './page/BooksShelf'
import SearchBooks from './page/SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books:[],
 }
 componentDidMount() {
    this.getAllBooks()
 }

 getAllBooks = () => {
  BooksAPI.getAll().then(books => {
    this.setState({
    books
    })
})
 }

updateBookShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then((res) => {
    this.getAllBooks()
  })
}

  render() {
    const {books} = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksShelf 
              books={books} 
              updateBookShelf={this.updateBookShelf}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
             updateBookShelf={this.updateBookShelf}
             booksWithShelfs={books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp



