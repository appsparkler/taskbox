import React from "react";
import PureTaskList from "./index";
import * as TaskStories from "./Task/index.stories";

const Template = (args) => <PureTaskList {...args} />;
Template.args = {};

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 001" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 002" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 003" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 004" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 005" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 006" },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...TaskStories.Pinned.args.task, id: "6", title: "Task 6 (pinned)" },
  ],
};

export const WithArchivedTasks = Template.bind({});
WithArchivedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...TaskStories.Archived.args.task, id: "6", title: "Task 6 (archived)" },
  ],
};

export const WithAllTaskTypes = Template.bind({});
WithAllTaskTypes.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 4),
    { ...TaskStories.Pinned.args.task, id: "5", title: "Task 5 (pinned)" },
    { ...TaskStories.Archived.args.task, id: "6", title: "Task 6 (archived)" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};

const Story = {
  title: "Pages/Task-Inbox/Task List",
  component: PureTaskList,
};


export default Story;
