import React from 'react';


function StateFilters(props) {

  const pressed = props.isPressed;

    return (
        <button
          type="button"
          className={`js-filter btn ${pressed ? "underlined" : ""}`}
          aria-pressed={props.isPressed} 
          onClick={() => props.setFilter(props.name)}
        >
          <span className="">{props.name}</span>
        </button>
    );
  }

export default StateFilters;