import { render, screen } from "@testing-library/react";

import Home from "@/app/page";
describe("Home", () => {
  it("shoul have Voir mon travail test", () => {
    render(<Home />); // ARRANGE

    const myElem = screen.getByText("Voir mon travail"); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
  it("shoul contain the text 'Moi c'est Khaera,'", () => {
    render(<Home />); // ARRANGE

    const heading = screen.getByRole("heading", {
      name: /Moi c'est Khaera,/i,
    }); // ACT

    expect(heading).toBeInTheDocument(); // ASSERT
  });
});
