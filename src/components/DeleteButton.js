import React from 'react';
import '../stylesheets/_index.scss';


function DeleteTasks (props) {

    return (
        <span className="box__delete__btn" >
            <button className="delete__btn" type="submit" onClick={props.resetAll} value="delete all">
                delete all                  
            <i className="fa delete__task fa-trash">                  </i>                    
            </button>
      </span>
    )
}

export default DeleteTasks;