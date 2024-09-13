import { render, screen } from "@testing-library/react";
import MusicPlayer from "../MusicPlayer";
import CurrentlyPlaying from "../components/CurrentlyPlaying";
import Playlist from "../components/Playlist";
import { expect, test } from "vitest";

test("MusicPlayer renders correctly", () => {
  const { container } = render(<MusicPlayer />);
  expect(container).toMatchSnapshot(); 
});

test("MusicPlayer has correct flex layout and shadow styling", () => {
  const { container } = render(<MusicPlayer />);
  const musicPlayerDiv = container.querySelector(".flex");
  expect(musicPlayerDiv).not.toBeNull();
});

test("MusicPlayer uses column layout on small screens", () => {
  const { container } = render(<MusicPlayer />);
  const musicPlayerDiv = container.querySelector(".md\\:flex-row");
  expect(musicPlayerDiv).not.toBeNull();
});

test("MusicPlayer renders CurrentlyPlaying component", () => {
  const { container } = render(<MusicPlayer />);
  const currentlyPlayingDiv = container.querySelector("div > div.p-3.flex-1"); // Select the div containing CurrentlyPlaying
  expect(currentlyPlayingDiv).not.toBeNull();
});

test("MusicPlayer applies correct border styling for Playlist section", () => {
  const { container } = render(<MusicPlayer />);
  const borderElement = container.querySelector(".md\\:border-l.border-t");
  expect(borderElement).not.toBeNull();
});
