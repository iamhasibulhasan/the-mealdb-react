import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SearchField = (props) => {
    return (
        <div>
            <InputGroup className="mb-3 mt-3 w-50 mx-auto">
                <InputGroup.Text id="inputGroup-sizing-default">Search Meal</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={props.handleSearchText}
                />
            </InputGroup>
        </div>
    );
};

export default SearchField;