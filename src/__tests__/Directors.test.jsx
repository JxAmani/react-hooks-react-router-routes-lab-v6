import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

// Mock director data
const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange"]
  }
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(directors),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks(); // clean up
});

test("renders each director's name", async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/directors"] });
  render(<RouterProvider router={router} />);

  expect(await screen.findByText(/Scott Derrickson/)).toBeInTheDocument();
});

test("renders a <li /> for each movie", async () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/directors"] });
  render(<RouterProvider router={router} />);

  const li = await screen.findByText(/Doctor Strange/);
  expect(li).toBeInTheDocument();
  expect(li.tagName).toBe("LI");
});
