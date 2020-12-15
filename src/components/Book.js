import React from 'react';
import PropTypes from 'prop-types'
import BookShelfMenu from './BookShelfMenu'

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value:this.props.book.shelf || this.props.value
    }
  }

  handleShelfChange = (ev) => {
      const {value} = ev.target
      this.setState({value})
      this.props.updateBookShelf(this.props.book, value)
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
  updateBookShelf:PropTypes.func.isRequired,
};



export default Book;
