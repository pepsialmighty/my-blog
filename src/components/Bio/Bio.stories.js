import React from "react";

import Bio from "./Bio";
import profilePic from "../../../public/static/images/profile.jpg";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot={`/${profilePic}`}
    name="Nguyen Nguyen"
    tagline="A traveller on his journey to universe knowledge!"
    role="Fullstack Developer @ Integrify"
  />
);

export const Default = Template.bind({});
