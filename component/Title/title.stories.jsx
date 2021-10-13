import React from 'react'
import Title from './title'
import { withKnobs, text, boolean, number, color } from "@storybook/addon-knobs";

export default {
    title: 'Title/Title',
    parameters: {
        info: {},
    },
    component: Title,
}

const Template = (args) => <Title {...args}></Title>;
export const Main= Template.bind({});
Main.args = {
  title: "Title",
  subtitle: "SubTitle",
  TitleColor: "text-white",
  TitleSize: "text-9xl",
  SubTitleColor: "text-gray-600",
  SubTitleSize: "text-6xl",
  // children: 'Primary Args'
};

export const CSR = () => <Title 
  title='Nextjs' 
  subtitle='CSR' 
  TitleColor='text-white' 
  TitleSize='text-9xl' 
  SubTitleColor= "text-gray-600"
  SubTitleSize= "text-6xl"
/> 
export const SSR = () => <Title 
  title='Nextjs' 
  subtitle='SSR' 
  TitleColor='text-white' 
  TitleSize='text-9xl' 
  SubTitleColor= "text-gray-600"
  SubTitleSize= "text-6xl"
/>
export const SSG = () => <Title 
  title='Nextjs' 
  subtitle='SSG' 
  TitleColor='text-white' 
  TitleSize='text-9xl' 
  SubTitleColor= "text-gray-600"
  SubTitleSize= "text-6xl"
/> 