import React from 'react';
import ReactDOM from 'react-dom';
import Buttontest from '../Buttontest';

import {render,cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer"

afterEach(cleanup);

it("render without crashing",()=>{
    const button = document.createElement("button")
    ReactDOM.render(<Buttontest/>, button)
    // ReactDOM.render
})

it("render button correctly",() => {
    const {getByTestId} = render(<Buttontest label="click me plase" />)
    expect(getByTestId('button')).toHaveTextContent("click me plase")
})

it("render button correctly",() => {
    const {getByTestId} = render(<Buttontest label="click me plase" />)
    expect(getByTestId('button')).toHaveTextContent("click me plase")
})

it("matches snapshot",()=>{
    const tree = renderer.create(<Buttontest label="save"/>).toJSON();
    expect (tree).toMatchSnapshot();
})


it("matches snapshot",()=>{
    const tree = renderer.create(<Buttontest label="click me please"/>).toJSON();
    expect (tree).toMatchSnapshot();
})