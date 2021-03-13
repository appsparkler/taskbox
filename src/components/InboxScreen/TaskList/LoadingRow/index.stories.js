import React from "react";
import LoadingRow from "./index";

const Template = (args) => <LoadingRow {...args} />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Pages/Task-Inbox/Loading Row",
  component: LoadingRow,
};

export default Story;
