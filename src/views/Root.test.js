import React from "react";
import { render, screen, fireEvent, waitFor } from "test-utils";
import Root from "./Root";

describe("Root component", () => {
  it("Renders the root component as unauthenticated user", () => {
    render(<Root />);
    screen.getByLabelText("login");
  });

  it("Diplays error message when wrong credentials are passed", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByTestId("hasło");

    fireEvent.change(login, { target: { value: "Elo" } });
    fireEvent.change(password, { target: { value: "Makrelo" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it("Diplays error message when no login is passed", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByTestId("hasło");

    fireEvent.change(login, { target: { value: "" } });
    fireEvent.change(password, { target: { value: "Test123" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Login is required/));
  });

  it("Diplays error message when no when no password is passed", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByTestId("hasło");

    fireEvent.change(login, { target: { value: "wiktor@broders.com" } });
    fireEvent.change(password, { target: { value: "" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Password is required/));
  });

  it("Diplays authenticated application", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByTestId("hasło");

    fireEvent.change(login, { target: { value: "wiktor@broders.com" } });
    fireEvent.change(password, { target: { value: "Test123" } });

    fireEvent.click(screen.getByText("Sign in"));

    await screen.findByText(/Lonnie/);
  });
});
