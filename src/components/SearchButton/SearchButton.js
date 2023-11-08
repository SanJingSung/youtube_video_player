import React from 'react';
import { Button } from 'react-bootstrap';
import { SEARCH_BUTTON_TEXT } from '../../constants/Strings';

function SearchButton({ onSearchClick }) {
  return (
    <Button className="mb-3 px-5 w-100" onClick={onSearchClick}>
      {SEARCH_BUTTON_TEXT}
    </Button>
  );
}

export default SearchButton;



