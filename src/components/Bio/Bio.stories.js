import React from "react";

import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
    name="Nguyen Nguyen"
    tagline="A traveller on his journey to universe knowledge!"
    role="Fullstack Developer @ Integrify"
  />
);

export const Default = Template.bind({});
