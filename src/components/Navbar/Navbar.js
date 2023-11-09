import React from 'react';
import SearchButton from '../SearchButton/SearchButton';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';

function Navbar({ handleSearch, searchTerm, handleInputChange, handleFormSubmit }) {
    return (
        <div className="row h-100">
            <div className="col-md-7 d-flex mb-3">
                <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            </div>
            <div className="col-3 d-flex h-100 search-container">
                <SearchButton onSearchClick={handleSearch} />
            </div>
        </div>
    )
}

export default Navbar;