import React, { useContext } from 'react';
import { Search } from 'react-bootstrap-icons';
import { VideoContext } from '../../contexts/VideoContext'; 

const SearchBar = () => {
    const { searchTerm, handleInputChange, handleFormSubmit } = useContext(VideoContext);

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
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default SearchBar;



