import React from "react";
import TaskInbox from "./index";
import TaskList from "./TaskList";
import * as TaskListStories from "./TaskList/index.stories";

const Template = args => <TaskInbox {...args} />

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  tasks: TaskListStories.Default.args.tasks,
  error: false
}

export const LoadedWithTasks = Template.bind({});
LoadedWithTasks.args = {
  ...Loading.args,
  tasks: TaskListStories.WithAllTaskTypes.args.tasks,
  loading: false
}

export const LoadedCompletedTasks = Template.bind({});
LoadedCompletedTasks.args = {
  ...Loading.args,
  tasks: TaskListStories.WithAllTaskTypes.args.tasks,
  loading: false
}

export const LoadingError = Template.bind({});
LoadingError.args = {
  ...Loading.args,
  error: 'Server is down.  Please re-try later.'
}

const Story = {
  title: "Pages/Task Inbox/Pure",
  component: TaskInbox,
};

export default Story;
