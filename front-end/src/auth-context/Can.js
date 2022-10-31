/* eslint-disable react/require-default-props */
import { React, createContext } from "react";
import PropTypes from "prop-types";

import { createContextualCan } from "@casl/react";

import { Ability } from "@casl/ability";

export const AbilityContext = createContext();
export const Can = createContextualCan(AbilityContext.Consumer);

export const AbilityProvider = ({ userData, children }) => {
  const _rules = new Ability(userData?.rules);
  // _rules = new Ability({
  //   action: "",
  //   subject: "",
  //   inverted: false,
  // });
  return <AbilityContext.Provider value={_rules}>{children}</AbilityContext.Provider>;
};

AbilityProvider.propTypes = {
  userData: PropTypes.any,
  children: PropTypes.any,
};
