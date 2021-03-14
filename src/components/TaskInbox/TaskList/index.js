import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Task from "./Task";
import EmptyScreen from "./EmptyScreen";
import { archiveTask, pinTask } from "../../../lib/redux";
import LoadingRows from './LoadingRows'

export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const tasksInOrder = React.useMemo(() => {
    return tasks.sort((task) => {
      if (task.state === "TASK_PINNED") return -1;
      if (task.state === "TASK_INBOX") return 0;
      if (task.state === "TASK_ARCHIVED") return 1;
      return 0.4;
    });
  }, [tasks]);

  if (loading) {
    return (
      <LoadingRows />
    );
  }

  if (tasks.length === 0) {
    return <EmptyScreen />;
  }

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};

export default TaskList
