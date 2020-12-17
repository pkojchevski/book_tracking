import React from 'react';
import { currentlyReading, wantToRead, read, none} from '../shared'
import PropTypes from 'prop-types'

const BookShelfMenu = ({value, handleShelfChange}) => {
    return (
        <div className="book-shelf-changer">
        <select value={value} onChange={handleShelfChange}>
            <option value="move" disabled>Move to...</option>
            <option value={currentlyReading}>Currently Reading</option>
            <option value={wantToRead}>Want to Read</option>
            <option value={read}>Read</option>
            <option value={none}>None</option>
        </select>
      </div>
    );
}

BookShelfMenu.propTypes = {
    value:PropTypes.string,
    handleShelfChange: PropTypes.func.isRequired
}

export default BookShelfMenu;
