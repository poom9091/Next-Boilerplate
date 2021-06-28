import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";
// import { withKnobs, text ,boolean, number} from '@storybook/addon-knobs'

export default {
  title: "Form/Button",
  component: Button,

  decorators: [(story) => <Center> {story()}</Center>, withKnobs],
  args: {
    children: "Button",
    onClick: { action: "clicked" },
  },
};

export const Primary = () => <Button variant="primary"> Primary </Button>;
export const Success = () => <Button variant="success"> Success </Button>;
export const Danger = () => <Button variant="danger"> Danger </Button>;

export const log = () => (
  <Button variant="primary" onClick={() => console.log("Button click")}>
    Log
  </Button>
);

export const withAButtoon = () => (
  <Button 
    disabled={boolean("Disabled", false)} 
    bgcolor={color("Background-Color","#008CBA")}
    color={color("Color","#fff")}
    fontsize={text("Font-Size",'16px')}
    boderrd={text("Border-redis","0.5rem")}
    padding={text("Padding","1.5rem")}
    width={text("Width","8rem")}
    height={text("Height","2rem")}
    > 
    {text("Label", "Hello Storybook")}
  </Button>
);
// <Button variant='danger'> {text('Label','Hello Storybook')} </Button>
// <Button variant='danger' disaabled={boolean('Disabled',false)}> {text('Label','Hello Storybook')} </Button>

const Template = (args) => <Button {...args}></Button>;
export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  bgcolor: "#008CBA",
  color: "#fff",
  fontsize: '16px',
  boderrd: '0.5rem',
  padding:"1.5rem",
  width: "8rem",
  height: "2rem",
  // children: 'Primary Args'
};
