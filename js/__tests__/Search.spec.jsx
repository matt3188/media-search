import React from "react";
import { shallow } from "enzyme";
import preload from "../../data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

const component = shallow(<Search shows={preload.shows} />);

describe("Search", () => {
  it("renders correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render correct amount of shows", () => {
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it("should render correct amount of shows based on search term", () => {
    const searchWord = "black";
    component.find("input").simulate("change", { target: { value: searchWord } });

    const showCount = preload.shows.filter(
      show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
    ).length;
    expect(component.find(ShowCard).length).toEqual(showCount);
  });
});
