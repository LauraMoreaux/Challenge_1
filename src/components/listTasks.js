import React from 'react';
import '../stylesheets/_index.scss';
import TaskCard from './TaskCard';

function ListTasks(props) {
    const dataList = props.tasks.map((task, index) => <TaskCard key={index} name={task.props.name} completed={task.props.completed} id={task.props.id}/>);
    return (
        <ul className="taskList">
            {dataList}
        </ul>
    );
}

export default ListTasks;