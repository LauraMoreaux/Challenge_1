import React from 'react';
import '../stylesheets/_index.scss';

const handleCheckbox = (ev) => {
    console.log("Este checkbox se ha pulsado", ev.target.checked, ev.target.id)
}

function TaskCard (props) {
    const state = props.completed;
    return (
        <li className="taskList__li">
            <input type="checkbox" onChange={handleCheckbox} checked={state} id={props.id} className="checkbox"/> 
            <label htmlFor={props.id}>{props.name}</label>
            <i className="fa task__fa fa-trash"></i>
        </li>
    );

}

export default TaskCard;