import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Assignment from "../components/Assignment";

describe("Submit button behavior", () => {
  it("Renders when assignment failed, but within 30 days of due date", () => {
    const { queryByRole } = render(
      <Assignment
        assignment={{
          due: "2021-02-01T00:00:00.000Z",
          submitted: true,
          score: 0,
        }}
      />
    );
    const button = queryByRole("button");
    expect(button).not.toBeNull();
    expect(button).toHaveTextContent(/resubmit/i);
  });
  it("Renders when assignment not turned in, and within 30 days of due date", () => {
    const { queryByRole } = render(
      <Assignment
        assignment={{
          due: "2021-02-01T00:00:00.000Z",
          submitted: false,
        }}
      />
    );
    const button = queryByRole("button");
    expect(button).not.toBeNull();
    expect(button).toHaveTextContent(/submit/i);
  });

  it("Does not render when assignment not turned in, and later than 30 days of due date", () => {
    const { queryByRole } = render(
      <Assignment
        assignment={{
          due: "2020-02-01T00:00:00.000Z",
          submitted: false,
        }}
      />
    );
    const button = queryByRole("button");
    expect(button).toBeNull();
  });

  it("Does not render when assignment passed", () => {
    const { queryByRole } = render(
      <Assignment
        assignment={{
          due: "2020-02-01T00:00:00.000Z",
          submitted: true,
          score: 90,
        }}
      />
    );
    const button = queryByRole("button");
    expect(button).toBeNull();
  });
});

describe("Status", () => {
  it("Displays 'Passed' when assignment receives a passing grade", () => {
    const { queryByText } = render(
      <Assignment
        assignment={{
          due: "2020-02-01T00:00:00.000Z",
          submitted: true,
          score: 90,
        }}
      />
    );
    const passed = queryByText(/passed/i);
    const failed = queryByText(/failed/i);
    expect(passed).not.toBeNull();
    expect(failed).toBeNull();
  });

  it("Displays 'Failed' when assignment receives a failing grade", () => {
    const { queryByText } = render(
      <Assignment
        assignment={{
          due: "2020-02-01T00:00:00.000Z",
          submitted: true,
          score: 79,
        }}
      />
    );
    const passed = queryByText(/passed/i);
    const failed = queryByText(/failed/i);
    expect(passed).toBeNull();
    expect(failed).not.toBeNull();
  });
});
