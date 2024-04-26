import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useMemo } from "react";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ExpensesList from "../components/ExpensesList";
import formatNumber from "../helpers/numberFormatter";

const AllExpenses = ({ navigation }) => {
  const { expenses } = useSelector((state) => state.expenses);

  const sumExpenses = (expenses) => {
    let acumulator = 0;

    expenses.forEach((element, index) => {
      acumulator += parseFloat(element.value);
    });
    return formatNumber(acumulator, 2);
  };
  const total = useMemo(() => sumExpenses(expenses), [expenses]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Total</Text>
        <View style={styles.innerContainer}>
          <FontAwesome5
            style={styles.innerItems}
            name="money-bill"
            size={24}
            color="black"
          />
          <Text style={styles.innerItems}>{total}</Text>
        </View>
      </View>
      <ExpensesList list={expenses} />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 16,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerItems: {
    marginHorizontal: 5,
  },
});
