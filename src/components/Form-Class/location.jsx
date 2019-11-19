import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const Location = (props) => {

  if (props.currentStep !== 9) {
    return null
  }

  return(
    <PlacesAutocomplete
      value={props.location}
      onChange={value => props.handleChange({target: {name: 'location', value: value}})}
      onSelect={props.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default Location;
