import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'
import BooksShelf from './page/BooksShelf'
import SearchBooks from './page/SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books:[],
    // currentlyReading:[],
    // wantToRead:[],
    // read:[]
 }
 componentDidMount() {
    this.getAllBooks()
 }

 getAllBooks = () => {
  BooksAPI.getAll().then(books => {
    console.log('books:', books)
    this.setState({
    books
    })
})
 }

updateBookShelf = (book, shelf) => (
  BooksAPI.update(book, shelf).then((res) => {
    console.log('res:', res)
    // this.setState({currentlyReading:res.currentlyReading, read:res.read, wantToRead:res.wantToRead})
    this.getAllBooks()
  })
)

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
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp



