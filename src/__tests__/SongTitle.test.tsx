import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";
import { MusicContext } from "../Context/MusicContext";

test("Song Title Renders Correctly On Fail", () => {
  const { container } = render(<SongTitle/>);
  expect(container).toMatchSnapshot();
});

const mockContextValue = {
  CurrentSong: {
    cover: "https://m.media-amazon.com/images/I/71pxGj4RoVS._AC_UF894,1000_QL80_.jpg",
    title: "Graduation",
  },
};

test("Song Title Renders Correctly On Success", () => {
  const { container } = render(
    <MusicContext.Provider value={mockContextValue}>
      <SongTitle />
    </MusicContext.Provider>
  );

  const titleElement = screen.getByText(/Graduation/i);
  expect(titleElement).not.toBeNull();
  expect(container).toMatchSnapshot();
})
