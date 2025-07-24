import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes";

// Mock data to match expectations
const mockMovies = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "Black Panther" },
  { id: 3, title: "Iron Man" }
];

// Mock fetch before each test
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockMovies)
    })
  );
});

// Clean up after each test
afterEach(() => {
  vi.restoreAllMocks();
});

const router = createMemoryRouter(routes, {
  initialEntries: ["/"]
});

test("renders 'Home Page' inside of an <h1 />", async () => {
  render(<RouterProvider router={router} />);
  const h1 = await screen.findByText(/Home Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("Displays a list of movie titles", async () => {
  render(<RouterProvider router={router} />);
  const titleList = await screen.findAllByRole('heading', { level: 2 });
  expect(titleList.length).toBeGreaterThan(2);
  expect(titleList[0].tagName).toBe("H2");
  expect(titleList[0].textContent).toBe("Doctor Strange");
});

test("Displays links for each associated movie", async () => {
  render(<RouterProvider router={router} />);
  const linkList = await screen.findAllByText(/View Info/);
  expect(linkList.length).toBeGreaterThan(2);
  expect(linkList[0].href).toContain("/movie/1");
});

test("renders the <NavBar /> component", async () => {
  render(<RouterProvider router={router} />);
  const nav = await screen.findByRole("navigation");
  expect(nav).toBeInTheDocument();
});
