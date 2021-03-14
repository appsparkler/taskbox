import React from "react";
import { PureInboxScreen } from "./index";
import {createStore} from 'redux'
import { Provider } from "react-redux";
import * as TaskListStories from "./TaskList/index.stories";
import TaskInbox from './'

const PRELOADED_STATE = {
  loading: true,
  tasks: []
}

const actions = {
  SET_IS_LOADING: "SET_IS_LOADING",
  SET_TASKS: "SET_TASKS",
  SET_ERROR: "SET_ERROR"
}

const mainReducer = (state, action) => {
  const {type: actionType, payload} = action;
  switch (actionType) {
    case actions.SET_IS_LOADING:
      return {
        ...state,
        loading: payload
      }
    case actions.SET_TASKS:
        return {
          ...state,
          tasks: payload
        }

    case actions.SET_ERROR:
      return {
        ...state,
        error: payload
      }
  
    default:
      return {...state}
  }
}

const my_redux_store = createStore(mainReducer, PRELOADED_STATE)

const setIsLoading = (payload = false) => my_redux_store.dispatch({
  type: actions.SET_IS_LOADING,
  payload
})

const setTasks = (payload = []) => my_redux_store.dispatch({
  type: actions.SET_TASKS,
  payload
})

const setError = (payload = []) => my_redux_store.dispatch({
  type: actions.SET_ERROR,
  payload
})

export const Loading = () => {
  React.useEffect(() => {
    setError(null)
    setIsLoading(true);
  }, [])
  return <TaskInbox />
};
Loading.args = {
  error: null,
}

export const LoadedWithTasks = () => {
  React.useEffect(() => {
    setError(null)
    setIsLoading(false);
    setTasks(TaskListStories.WithAllTaskStates.args.tasks)
  }, [])
  return <TaskInbox />
};
LoadedWithTasks.args = {
  error: null,
};

export const LoadedWithNoTasks = () => {
  React.useEffect(() => {
    setError(null);
    setIsLoading(false);
    setTasks([])
  }, []);
  return <TaskInbox />
}

export const Error = () => {
  React.useEffect(() => {
    setIsLoading(false);
    setTasks([]);
    setError('Server is down.  Please try again in some time.')
  }, []);
  return <TaskInbox />
}

const Story = {
  title: "Pages/Task Inbox",
  component: PureInboxScreen,
  decorators: [
    (Story) => (
      <Provider store={my_redux_store}>
        <Story />
      </Provider>
    ),
  ],
};

export default Story;
