import React from 'react';
import { Button } from 'react-bootstrap';
import { SEARCH_BUTTON_TEXT } from '../../constants/Strings';

function SearchButton({ onSearchClick }) {
  return (
    <Button className="btn-danger w-50 mb-3" onClick={onSearchClick}>
      {SEARCH_BUTTON_TEXT}
    </Button>
  );
}

export default SearchButton;



