import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  NavLink: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

import Navigation from "./Navigation";

test("navigation links point to the correct pages", () => {
  render(<Navigation />);

  expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
    "href",
    "/"
  );

  expect(screen.getByRole("link", { name: "Search" })).toHaveAttribute(
    "href",
    "/search"
  );

  expect(screen.getByRole("link", { name: "Favourites" })).toHaveAttribute(
    "href",
    "/favourites"
  );
});
