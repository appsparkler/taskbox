import React from "react";
import EmptyScreen from "./index";

const Template = (args) => <EmptyScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Pages/Task-Inbox/Task List/Empty Screen",
  component: EmptyScreen,
};

export default Story;
