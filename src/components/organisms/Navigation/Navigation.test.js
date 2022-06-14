import { render, screen, fireEvent, waitFor } from "test-utils";
import Navigation from "./Navigation";
import Root from "../../../views/Root";
import Notes from "../../../views/Notes";
import News from "../../templates/NewsSection/NewsSection";

describe("Navigation", () => {
  it("Renders the component", () => {
    render(<Navigation />);
    screen.getByText("Dashboard");
  });

  it("Tests change view to notes", async () => {
    render(<Navigation />);
    render(<Root />);
    render(<Notes />);
    fireEvent.click(screen.getByText("Notes"));

    await waitFor(() => screen.getByText(/Create your first note/));
  });

  it("Tests log out", async () => {
    render(<Navigation />);
    render(<Root />);
    fireEvent.click(screen.getByText("Logout"));

    await waitFor(() => screen.getByText(/login/));
  });

  it("Tests change view to news", async () => {
    render(<Navigation />);
    render(<Root />);
    render(<News />);
    fireEvent.click(screen.getByText("News"));

    await waitFor(() => screen.getByText(/Aktualności/));
  });
});
