import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";
import { MusicContext } from "../Context/MusicContext";


test("Cover Art Renders Correctly On Fail", () => {
  const { container } = render(<CoverArt/>);
  expect(container).toMatchSnapshot();
});

const mockContextValue = {
  CurrentSong: {
    cover: "https://m.media-amazon.com/images/I/71pxGj4RoVS._AC_UF894,1000_QL80_.jpg",
    title: "Graduation",
  },
};

const mockEmptyContext = null;

test("Matches snapshot when CurrentSong is available", () => {
  const { container } = render(
    <MusicContext.Provider value={mockContextValue}>
      <CoverArt />
    </MusicContext.Provider>
  );

  expect(container).toMatchSnapshot();
});
