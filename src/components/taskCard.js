import React from 'react';
import '../stylesheets/_index.scss';

function TaskCard (props) {
    return (
        <li className="taskList__li">
            <input type="checkbox" defaultChecked={props.completed} id={props.id} className="checkbox"/> 
            <label htmlFor={props.id}>{props.name}</label>
            <i className="fa task__fa fa-trash"></i>
        </li>
    );

}

export default TaskCard;