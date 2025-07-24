import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

function renderWithRouter(initialEntries = ["/"]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <NavBar />
    </MemoryRouter>
  );
}

test('wraps content in a div with "navbar" class', () => {
  const { container } = renderWithRouter();
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  renderWithRouter(["/"]);
  const link = screen.getByText("Home");
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/");
  expect(link.className).toMatch(/active/i); // ✅ active class applied on current route
});

test("renders an Actors <NavLink>", () => {
  renderWithRouter(["/actors"]);
  const link = screen.getByText("Actors");
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/actors");
  expect(link.className).toMatch(/active/i); // ✅ active class applied on current route
});

test("renders a Directors <NavLink>", () => {
  renderWithRouter(["/directors"]);
  const link = screen.getByText("Directors");
  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link).toHaveAttribute("href", "/directors");
  expect(link.className).toMatch(/active/i); // ✅ active class applied on current route
});
