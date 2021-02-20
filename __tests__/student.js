import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import StudentPage from "../pages/student";

describe("Student Page", () => {
  it("renders", () => {
    render(<StudentPage name="Sample Student" assignments={[]} />);
  });

  it("Displays assignments passed in relation to total number of assignments", () => {
    const { container } = render(
      <StudentPage
        name="Sample Student"
        assignments={[
          {
            id: 1,
            title: "Sample 1",
            score: 30,
            due: new Date(),
            submitted: true,
          },
          {
            id: 2,
            title: "Sample 1",
            score: 80,
            due: new Date(),
            submitted: true,
          },
          {
            id: 3,
            title: "Sample 1",
            score: 90,
            due: new Date(),
            submitted: true,
          },
        ]}
      />
    );
    const passedRate = container.querySelector("#passedRate");
    expect(passedRate).toHaveTextContent(/2\/3/);
  });
});
