import React from 'react'
import Carduser from './Carduser2'
import faker from 'faker'

export default {
    title: 'Card/Card2',
    component: Carduser 
}

export const main = () => <Carduser/>

const Template = (args) => 
<div className="w-3/5">
    <Carduser {...args}/>
</div>


export const Main= Template.bind({});
Main.args = {
  colortheme: 'blue-400',
  name : faker.fake("{{name.firstName}}"),
  species: faker.animal.type(),
  image: faker.image.animals(), 
  imageHight: 'h-40',
  imageWidht: 'w-44',
};


