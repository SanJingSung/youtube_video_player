import React from 'react';
import { Button } from 'react-bootstrap';

function SearchButton({ onSearchClick }) {
  return (
    <Button className="mb-3 px-5" onClick={onSearchClick}>
      Search
    </Button>
  );
}

export default SearchButton;


