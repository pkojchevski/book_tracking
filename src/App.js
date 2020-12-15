import React from 'react'

import './App.css'
import { Route } from 'react-router-dom'
import BooksShelf from './page/BooksShelf'
import SearchBooks from './page/SearchBooks'
import * as BooksAPI from './BooksAPI'
import * as util from './shared'

class BooksApp extends React.Component {
  state = {
    books:[]
 }
 componentDidMount() {
   BooksAPI.getAll().then(books => {
       this.setState({
       books
       })
   })
 }

setToCurrReading = (book) => {
   this.setState(oldState => ({
       books:util.changeShelfStatus(oldState.books, book, util.currentlyReading)
   }))
}

setToRead = (book) => {
   this.setState(oldState => ({
       books:util.changeShelfStatus(oldState.books, book, util.read)
   }))
}

setToWantToRead = (book) => {
   this.setState(oldState => ({
       books:util.changeShelfStatus(oldState.books, book, util.wantToRead)
   }))
}

setToNone = (book) => {
   this.setState(oldState => ({
       books:util.changeShelfStatus(oldState.books, book, util.none)
   }))
}

  render() {
    const {books} = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksShelf 
              books={books} 
              setToCurrReading={this.setToCurrReading} 
              setToWantToRead={this.setToWantToRead} 
              setToRead={this.setToRead} 
              setToNone={this.setToNone}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
              books={books} 
              setToCurrReading={this.setToCurrReading} 
              setToWantToRead={this.setToWantToRead} 
              setToRead={this.setToRead} 
              setToNone={this.setToNone}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
