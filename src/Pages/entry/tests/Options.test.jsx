/* eslint-disable no-undef */
import { render, screen } from "../../../test-utils/testing-library-utils";
import {expect} from 'vitest';
import Options from "../Options";
import '@testing-library/jest-dom';

test("displays image for each scoop option from server",async()=>{
render(<Options optionType ="scoops"/>)

//find images
const scoopImages = await screen.findAllByRole('img',{name:/scoop$/i});
expect(scoopImages).toHaveLength(2); //there are 2 options in the mock data file

// confirm alt text of images
const altText =scoopImages.map((element)=>element.alt)
expect(altText).toEqual(["Chocolate scoop",'Vanilla scoop'])
})

test("displays image for each scoop option from toppings",async ()=>{
    render(<Options optionType ="toppings"/>)
//find images
const scoopImages = await screen.findAllByRole('img',{name:/topping$/i})
expect(scoopImages).toHaveLength(3);

// confirm alt text of images
const altText =scoopImages.map((element)=>element.alt);
expect(altText).toEqual(["Cherries topping","M&Ms topping","Hot fudge topping"])
})