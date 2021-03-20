import React from 'react';
import '../stylesheets/_index.scss';



function TaskCard (props) {
    
    const handleCheckbox = (ev) => {
        console.log("Este checkbox se ha pulsado", ev.target);
        props.handleStatus(ev.target.id);
    }

    return (    
        <li className="taskList__li">
            <input type="checkbox" onChange={handleCheckbox} checked={props.completed} id={props.id} className="checkbox"/> 
            <label htmlFor={props.id}>{props.name}</label>
            <i className="fa task__fa fa-trash"></i>
        </li>
    );

}

export default TaskCard;