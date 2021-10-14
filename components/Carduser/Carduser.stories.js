import React from 'react'
import Carduser from './Carduser'
import faker from 'faker'

export default {
    title: 'Card/Card1',
    component: Carduser 
}

// export const main = () => <Carduser/>

const Template = (args) => 
<div className="w-3/5">
    <Carduser {...args}/>
</div>
export const Main= Template.bind({});
Main.args = {
  colortheme: 'blue-600',
  avatar: faker.image.avatar() ,
  name: faker.fake("{{name.firstName}} {{name.lastName}}"), 
  username: faker.name.firstName(), 
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email()
};

