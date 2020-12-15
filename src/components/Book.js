import React from 'react';
import PropTypes from 'prop-types'
import BookShelfMenu from './BookShelfMenu'
import * as util from '../shared'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:this.props.book.shelf,
    }
  }

  handleClickOnCurrentlyReading = (book) => (
    this.props.setToCurrReading(book)
  )

  handleClickOnWantToRead = (book) => (
    this.props.setToWantToRead(book)
  )



  handleClickOnNone = (book) => (
    this.props.setToNone(book)
  )

  handleShelfChange = (ev) => {
      const {value} = ev.target
      switch (value) {
        case util.read: 
          this.props.setToRead(this.props.book)
          break;
        case util.currentlyReading:
          this.props.setToCurrReading(this.props.book)
          break;
        case util.wantToRead:
          this.props.setToWantToRead(this.props.book)
            break;
        case util.none:
              this.props.setToNone(this.props.book)
              break;
      }
  } 


  render() {
    const {book} = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
              style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
          </div>
          <BookShelfMenu value={this.state.value} handleShelfChange={this.handleShelfChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
    </div>
  );
  }

}

Book.propTypes = {
  book:PropTypes.object.isRequired,
  setToCurrReading:PropTypes.func.isRequired,
  setToWantToRead:PropTypes.func.isRequired,
  setToRead:PropTypes.func.isRequired,
  setToNone:PropTypes.func.isRequired
};



export default Book;
