import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routes from "../routes";

// ✅ Correct fetch mock: returns a single movie object
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 1,
          title: "Doctor Strange",
          time: 115,
          genres: ["Action", "Adventure", "Fantasy"],
        }),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ✅ Create memory router pointing to /movie/1
const router = createMemoryRouter(routes, {
  initialEntries: ["/movie/1"],
});

test("renders without any errors", () => {
  const errorSpy = vi.spyOn(console, "error");
  render(<RouterProvider router={router} />);
  expect(errorSpy).not.toHaveBeenCalled();
  errorSpy.mockRestore();
});

test("renders movie's title in an h1", async () => {
  render(<RouterProvider router={router} />);
  const h1 = await screen.findByRole("heading", { level: 1 });
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveTextContent("Doctor Strange");
});

test("renders movie's time within a p tag", async () => {
  render(<RouterProvider router={router} />);
  const p = await screen.findByText("115");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a span for each genre", async () => {
  render(<RouterProvider router={router} />);
  const genres = ["Action", "Adventure", "Fantasy"];
  for (const genre of genres) {
    const span = await screen.findByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});

test("renders the <NavBar /> component", async () => {
  render(<RouterProvider router={router} />);
  const nav = await screen.findByRole("navigation");
  expect(nav).toBeInTheDocument();
});
