import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import LoadingRow from "./LoadingRow";
import EmptyScreen from "./EmptyScreen";

const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const tasksInOrder = React.useMemo(() => {
    return [
      ...tasks.filter((task) => task.state === "TASK_PINNED"),
      ...tasks.filter((task) => task.state === "TASK_INBOX"),
      ...tasks.filter((task) => task.state === "TASK_ARCHIVED"),
    ];
  }, [tasks]);

  if (loading) {
    return (
      <div className="list-items">
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </div>
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

export default TaskList;
