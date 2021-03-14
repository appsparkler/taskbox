import React from "react";
import TaskInbox from "./index";
import * as TaskListStories from "./TaskList/index.stories";

const Template = args => <TaskInbox {...args} />

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  tasks: [],
  error: false
}

const Story = {
  title: "Pages/Task Inbox/Pure",
  component: TaskInbox,
};

export default Story;
