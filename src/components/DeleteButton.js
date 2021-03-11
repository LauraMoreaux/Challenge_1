import React from 'react';
import '../stylesheets/_index.scss';


function DeleteTasks () {
    return (
        <span className="box__delete__btn">
        <button className="delete__btn" type="submit"> <i className="fa delete__task fa-trash"></i>delete all</button>
      </span>
    )
}

export default DeleteTasks;