/* eslint-disable no-undef */
import { http, HttpResponse } from 'msw';
 import {server} from '../../../mocks/server';
 import {expect} from 'vitest';
import { render,screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";

test.only("handles error for scoops and toppings routes",async ()=>{
    //to bypass defaut handler
server.resetHandlers(
    http.get("http://localhost:3030/scoops",()=>{
return new HttpResponse(null,{status:500})
    }),
    http.get("http://localhost:3030/toppings",()=>{
return new HttpResponse(null,{status:500})
    }),
)
render(<OrderEntry />)
const alerts = await screen.findAllByText(
    "An unexpected error ocurred. Please try again later."
);

expect(alerts).toHaveLength(2)
})

test("my test 2",()=>{})

test("my test 3",()=>{})