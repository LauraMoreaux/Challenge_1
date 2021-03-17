import React from 'react';


function StateFilters(props) {
    return (
        <button
          type="button"
          className="js-filter btn"
          aria-pressed={props.isPressed}
          onClick={() => props.setFilter(props.name)}
        >
          <span className="">{props.name}</span>
        </button>
    );
  }

export default StateFilters;