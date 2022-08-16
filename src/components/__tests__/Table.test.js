import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Table from "../../components/Table";
import "@testing-library/jest-dom";
import data from "../../data.json";

afterEach(() => {
    cleanup();
});

test("should render table component", () => {
    render(<Table data={data}/>);

    var textElem = screen.getByTestId("table2PDF");

    expect(textElem).toBeInTheDocument();
});