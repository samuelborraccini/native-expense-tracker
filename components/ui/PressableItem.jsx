import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PressableItem = ({
  onPress,
  children,
  containerStyle,
  pressableStyle,
  backgroundColor,
}) => {
  return (
    <View style={[{ overflow: "hidden" }, containerStyle]}>
      <Pressable
        style={({ pressed }) => [
          {
            width: "100%",

            padding: 12,
            justifyContent: "center",
            alignItems: "center",
          },
          pressed && { opacity: 0.5 },
        ]}
        onPress={onPress}
      >
        {children}
      </Pressable>
    </View>
  );
};

export default PressableItem;
