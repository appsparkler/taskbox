import React from "react";
import EmptyScreen from "./EmptyScreen";

const Template = (args) => <EmptyScreen {...args} />;

export const Default = Template.bind({});
Default.args = {};

const Story = {
  title: "Components/Empty Screen",
  component: EmptyScreen,
};

export default Story;
