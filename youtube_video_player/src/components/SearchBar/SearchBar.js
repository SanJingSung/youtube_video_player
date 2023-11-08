import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { SEARCH_ARIA_LABEL, SEARCH_INPUT_PLACEHOLDER, SEARCH_ADDON_ID } from '../../constants/Strings';

const SearchBar = ({ searchTerm, handleInputChange, handleFormSubmit }) => {
    return (
        <form onSubmit={handleFormSubmit} className="input-group" role="search">
            <div className="input-group-prepend">
                <span className="input-group-text" id="search-addon">
                    <Search className="fs-4" aria-label="Search" />
                </span>
            </div>
            <input
                type="search"
                className="form-control rounded"
                placeholder={SEARCH_INPUT_PLACEHOLDER}
                aria-label={SEARCH_ARIA_LABEL}
                aria-describedby={SEARCH_ADDON_ID}
                value={searchTerm}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default SearchBar;




