import React from 'react';
import * as util from '../shared'
import PropTypes from 'prop-types'

const BookShelfMenu = ({value, handleShelfChange}) => {

    return (
        <div className="book-shelf-changer">
        <select value={value} onChange={handleShelfChange}>
            <option value="move" disabled>Move to...</option>
            <option value={util.currentlyReading}>Currently Reading</option>
            <option value={util.wantToRead}>Want to Read</option>
            <option value={util.read}>Read</option>
            <option value={util.none}>None</option>
        </select>
      </div>
    );
}

BookShelfMenu.propTypes = {
    value:PropTypes.string,
    handleShelfChange: PropTypes.func.isRequired
}

export default BookShelfMenu;
