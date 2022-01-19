import React from "react";
import Task from "./Task.jsx";
import CreateTask from './CreateTask.jsx'
import * as tasksAction from "../tasks.actions.js";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortedTasksSelector } from '../tasks.selector.js';



class TasksList extends React.Component {
    componentDidMount() {
        this.props.getTasksList()
    }
    render() {
        return (
            <main className="todo-list">
                <CreateTask onCreate={this.props.createTask}></CreateTask>
                <ul className="list">
                    {this.props.tasks.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onChange={this.props.updateTask}
                            onDelete={this.props.deleteTask}
                            >
                        </Task>
                    ))}
                </ul>
            </main>
        );
    }
}
TasksList.propTypes = {
    getTasksList: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
}
const mapDispatch = {
    getTasksList: tasksAction.getTasksList,
    updateTask: tasksAction.updateTask,
    deleteTask: tasksAction.deleteTask,
    createTask: tasksAction.createTask
}
const mapState = state => {
    return {
        tasks: sortedTasksSelector(state)
    }
}
export default connect(mapState, mapDispatch)(TasksList);