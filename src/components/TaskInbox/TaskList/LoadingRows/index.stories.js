import React from "react";
import LoadingRows from './index'

const Template = (args) => <LoadingRows {...args} />;
Template.args = {};

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Pages/Task-Inbox/Task List/Loading Rows",
  component: LoadingRows,
};


export default Story;
