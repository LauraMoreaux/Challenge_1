import React from 'react';
import '../stylesheets/_index.scss';
import TaskCard from './TaskCard';

function ListTasks(props) {
    const dataList = props.tasks.map(task => <TaskCard name={task.name} completed={task.completed} id={task.id}/>);
    return (
        <ul className="taskList">
            {dataList}
        </ul>
    );
}

export default ListTasks;