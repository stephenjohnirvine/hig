import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import { CaretUp24, CaretDown24 } from "@hig/icons";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./IncrementDecrementPresenter.stylesheet";

export default function IncrementDecrementPresenter(props) {
  const {
    isDisabled,
    hasFocus,
    increment,
    decrement,
    stylesheet: customStylesheet
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles, metadata }) => {
        const styles = stylesheet({ isDisabled, hasFocus }, resolvedRoles);
        const cssStyles = customStylesheet
          ? customStylesheet(
              styles,
              props,
              resolvedRoles,
              metadata.colorSchemeId
            )
          : styles;

        return (
          <div className={css(cssStyles.scrollers)}>
            <button onClick={increment} className={css(cssStyles.button)}>
              <CaretUp24 className={css(cssStyles.caret)} />
            </button>
            <button onClick={decrement} className={css(cssStyles.button)}>
              <CaretDown24 className={css(cssStyles.caret)} />
            </button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

IncrementDecrementPresenter.propTypes = {
  isDisabled: PropTypes.bool,
  hasFocus: PropTypes.bool,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  stylesheet: PropTypes.func
};
