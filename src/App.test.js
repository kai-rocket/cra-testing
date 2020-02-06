import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  // console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});

// const a = {
//   foo: 'bar',
//   boo: 'baz',
// };

// const { foo } = a;
// console.log(foo);
// foo === 'bar'

// assert(2 + 2, 4);

// describe("home page has the right text", () => {
//   test("renders learn react link", () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });

//   test("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//   });
// });

// describe("colours on home page are blue", () => {
//   test("blue color background", () => {
//     // expect(true).to.be.true;
//   });
// });

// test("renders without crashing", () => {

// })
