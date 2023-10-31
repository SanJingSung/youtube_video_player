import React from 'react';
import { Search } from 'react-bootstrap-icons';

const SearchBar = ({ onChange, value }) => {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <Search className="fs-4" id="search-icon" />
                </span>
            </div>
            <input
                type="text"
                className="form-control rounded"
                placeholder={"Search..."}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;



