import { Search } from 'react-bootstrap-icons';

const SearchBar = ({ onSearchSubmit, setSearchTerm, searchTerm }) => {
    
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(searchTerm);
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
                placeholder="Search..."
                value={searchTerm} 
                onChange={handleInputChange}
            />
        </form>
    );
}

export default SearchBar;



