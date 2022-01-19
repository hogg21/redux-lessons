import { tasksListSelector } from './tasks.selector.js';
import * as tasksGateway from './tasksGateway.jsx';

export const TASK_LIST_RECIEVED = 'TASK_LIST_RECIEVED';
export const tasksListRecieved = (tasksList) => {
    return {
        type: TASK_LIST_RECIEVED,
        payload: {
            tasksList,
        }
    }
}

export const getTasksList = () => () => {
    const thunkAction = function (dispatch) {
        tasksGateway.fetchTasksList().then(tasksList => dispatch(tasksListRecieved(tasksList)))
    }

    return thunkAction;
}

export const updateTask = (taskId) => {
    const thunkAction = function (dispatch, getState) {
        const state = getState();
        const tasksList = tasksListSelector(state)
        const task = tasksList.find(task => task.id === taskId);
        const updatedTask = {
            ...task,
            done: !task.done
        }
        tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()))
    }

    return thunkAction;
}


export const deleteTask = (taskId) => {
    const thunkAction = function (dispatch) {
        tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()))
    }

    return thunkAction;
}

export const createTask = (text) => {
    const thunkAction = function (dispatch) {
        const taskData = {
            text,
            done: false,
            createdAt: new Date().toISOString()
        }
        tasksGateway.createTask(taskData).then(() => dispatch(getTasksList()))
    }

    return thunkAction;
}