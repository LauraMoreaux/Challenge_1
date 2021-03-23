import React from 'react';
import '../stylesheets/_index.scss';
import TasksCard from './TasksCard';

function TasksList(props) {
    const dataList = props.tasks.map((task, index) => <TasksCard key={index} name={task.props.name} completed={task.props.completed} id={task.props.id} handleStatus={props.handleStatus} handleDeleteIcon={props.handleDeleteIcon}/>);
    return (
        <ul className="taskList">
            {dataList}
        </ul>
    );
}

export default TasksList;