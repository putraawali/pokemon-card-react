import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("Test for non async", () => {
  test("First render to loading page", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const loadingElement = screen.getByText("Loading...");
    const navbarElement = screen.getByRole("navigation");
    expect(loadingElement).toBeInTheDocument();
    expect(navbarElement).toBeInTheDocument();
  });

  describe("Action in navbar", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const navbarElement = screen.getByRole("navigation");

    test("Move to favorite page", () => {
      const favoriteButtonElement = navbarElement.querySelectorAll("a");
      favoriteButtonElement.getByText("Favorites");
      const favoritesPage = screen.getByText("Your Favorites Pokemon");
      fireEvent.click(favoriteButtonElement);
      expect(favoritesPage).toBeInTheDocument();
    });
  });
});
