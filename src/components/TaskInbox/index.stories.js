import React from "react";
import { PureInboxScreen } from "./index";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import * as TaskListStories from "./TaskList/index.stories";

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.WithAllTaskStates.args.tasks,
      loading: true,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: null,
};

export const Loading = Template.bind({});
Default.args = {
  error: null,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: "Server is down!",
};

const Story = {
  title: "Pages/Task Inbox",
  component: PureInboxScreen,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default Story;
