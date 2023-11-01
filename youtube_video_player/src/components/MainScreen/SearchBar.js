import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

const SearchBar = ({ onSearchSubmit, setSearchTerm }) => {
    const [term, setTerm] = useState('');

    const handleInputChange = (event) => {
        setTerm(event.target.value);
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(term);
    };

    return (
        <form onSubmit={handleFormSubmit} className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <Search className="fs-4" id="search-icon" />
                </span>
            </div>
            <input
                type="text"
                className="form-control rounded"
                placeholder={"Search..."}
                value={term}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default SearchBar;




