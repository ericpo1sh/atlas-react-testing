import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControls from "../components/VolumeControls";

test("Volume Controls Renders Correctly", () => {
  const { container } = render(<VolumeControls/>);
  expect(container).not.toBeNull();
  expect(container).toMatchSnapshot();
});
