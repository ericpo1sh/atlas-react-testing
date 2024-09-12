import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem";

test("Play List Item Renders Correctly With valid props", () => {
  const { container } = render(<PlayListItem title='test' artist='testerEric' duration='7:77' className=""/>);
  expect(container).toMatchSnapshot();
});

test("Play List Item Renders Correctly With valid props v2", () => {
  const { container } = render(<PlayListItem title='test-2' artist='testerEric-2' duration='8:88' className="bg-slate-200 rounded"/>);
  expect(container).toMatchSnapshot();
});

test("Play List Item Renders Correctly Without Props", () => {
  const { container } = render(<PlayListItem/>);
  expect(container).toMatchSnapshot();
})
