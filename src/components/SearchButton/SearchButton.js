import React from 'react';
import { Button } from 'react-bootstrap';
import { SEARCH_BUTTON_TEXT } from '../../constants/Strings';
import './SearchButton.css';

function SearchButton({ onSearchClick }) {
  return (
    <Button className="btn-danger w-100 mb-3 search-button" onClick={onSearchClick}>
      {SEARCH_BUTTON_TEXT}
    </Button>
  );
}

export default SearchButton;



