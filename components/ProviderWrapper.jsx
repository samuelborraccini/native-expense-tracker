import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
