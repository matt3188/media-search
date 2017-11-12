import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";

const component = shallow(<Search />);

describe("Search", () => {
  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });
  });
});
