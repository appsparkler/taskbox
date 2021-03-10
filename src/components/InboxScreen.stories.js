import React from "react";
import { PureInboxScreen } from "./InboxScreen";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import * as TaskListStories from "./TaskList.stories";

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.WithAllTaskStates.args.tasks,
      loading: false,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  error: "Oh no!",
};

const Story = {
  title: "Components/Inbox Screen",
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
