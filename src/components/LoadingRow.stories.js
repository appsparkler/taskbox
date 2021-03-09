import React from "react";
import LoadingRow from "./LoadingRow";

const Template = (args) => <LoadingRow {...args} />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Components/Loading Row",
  component: LoadingRow,
};

export default Story;
