import React from 'react';
import { Search } from 'react-bootstrap-icons';
import { SEARCH_INPUT_PLACEHOLDER } from '../../constants/Strings';
import './SearchBar.css';

const SearchBar = ({ searchTerm, handleInputChange, handleFormSubmit }) => {
    return (
        <form onSubmit={handleFormSubmit} className="input-group" role="search">
            <input
                type="search"
                className="px-5 form-control rounded search-input"
                placeholder={SEARCH_INPUT_PLACEHOLDER}
                value={searchTerm}
                onChange={handleInputChange}
            />
            <div className="search-icon">
                <Search className="fs-4" aria-label="Search" />
            </div>
        </form>
    );
}

export default SearchBar;



