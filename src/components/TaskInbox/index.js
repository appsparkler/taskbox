import React from "react";
import PropTypes from "prop-types";
import TaskList from "./TaskList";

export const TaskInbox = ({ error, tasks, loading, onArchiveTask, onPinTask }) => {
  if (error) {
    return (
      <div className="page lists-show">
        <nav>
          <h1 className="title-page">
            <span className="title-wrapper">Taskbox</span>
          </h1>
        </nav>
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">{error}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList tasks={tasks} loading={loading} onArchiveTask={onArchiveTask} onPinTask={onPinTask}/>
    </div>
  );
};

TaskInbox.propTypes = {
  /** The error message */
  error: PropTypes.string,
  loading: PropTypes.bool,
  onArchiveTask:PropTypes.func,
  onPinTask: PropTypes.func
};

TaskInbox.defaultProps = {
  error: null,
};

export default TaskInbox
