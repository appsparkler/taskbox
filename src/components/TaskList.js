import React from "react";
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

export default TaskList;
