import { mount } from "enzyme";
import React from "react";
import merge from "lodash.merge";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import Modal from "./Modal";

describe("modal/Modal", () => {
  describe("integration", () => {
    takeSnapshotsOf(Modal, [
      {
        desc: "renders correctly",
        props: {
          body: "Hi",
          open: true,
          title: "HIG Modal"
        }
      },
      {
        desc: "renders with styles customized",
        props: {
          body: "Hi",
          open: true,
          title: "HIG Modal",
          stylesheet: styles =>
            merge(styles, { modal: { wrapper: { color: "aliceblue" } } })
        }
      }
    ]);
  });

  describe("event handlers", () => {
    let wrapper;

    const eventHandler = jest.fn();
    eventHandler.mockReset();

    describe("onCloseClick", () => {
      beforeEach(() => {
        wrapper = mount(<Modal open onCloseClick={eventHandler} />);
      });

      it("is triggered on blur", () => {
        wrapper.find("IconButton").simulate("click");
        expect(eventHandler).toBeCalled();
      });
    });

    describe("onOverlayClick", () => {
      beforeEach(() => {
        wrapper = mount(<Modal open onOverlayClick={eventHandler} />);
      });

      it("is triggered on change", () => {
        wrapper.find("ModalPresenter").simulate("click");

        expect(eventHandler).toHaveBeenCalled();
      });
    });
  });
});
