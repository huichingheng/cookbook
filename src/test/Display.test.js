import React from "react";
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";
import Display from "../component/Display";
import testData from "./helper/testData"


const wrapper = shallow(
  <Display selectedRecipe={testData} />
);

describe("<Display />", () => {
  describe("should have", () => {
    it("title", () => {
      expect(wrapper.find(".title")).toHaveLength(1);
    });
    it("image", () => {
      expect(wrapper.find(".display-image")).toHaveLength(1);
    });
    it("recipe source", () => {
      expect(wrapper.find(".recipe-source")).toHaveLength(1);
    });
  });

  describe("Snapshot", () => {
    const result = shallowRender(Display);
    it("should match", () => {
      expect(result.props).toMatchSnapshot();
    });
  });
});
