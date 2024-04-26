import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import formatNumber from "../helpers/numberFormatter";
import { useDispatch } from "react-redux";
import { removeExpense } from "../redux/slices/expensesSlice";

const ExpensesList = ({ list }) => {
  const dispatch = useDispatch();
  const handleDelete = (title) => {
    dispatch(removeExpense({ title }));
  };
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleDelete(item.title)}
            style={({ pressed }) => [
              styles.listItemContainer,
              pressed && { opacity: 0.5 },
            ]}
          >
            <View>
              <Text style={{ color: "black" }}>{item.title}</Text>
              <Text style={{ color: "black" }}>{item.registered}</Text>
            </View>
            <View>
              <Text style={{ color: "black" }}>
                {formatNumber(parseFloat(item.value), 2)}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "orange",
    width: "100%",
    marginVertical: 10,
    padding: 8,
    borderRadius: 10,
  },
});
