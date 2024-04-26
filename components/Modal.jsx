import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/slices/expensesSlice";
import PressableItem from "./ui/PressableItem";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Modal() {
  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth() is zero-indexed, so add 1
    const day = date.getDate();

    // Pad the month and day with leading zeros if necessary
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  }
  const [newExpense, setNewExpense] = useState({
    title: "",
    value: "",
    registered: formatDateToYYYYMMDD(new Date()),
  });
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const handleDispatch = () => {
    dispatch(addExpense(newExpense));
    //console.log(newExpense);
  };
  const onChange = (event, selectedDate) => {
    setNewExpense((state) => ({
      ...state,
      registered: formatDateToYYYYMMDD(selectedDate),
    }));
    setDate(selectedDate);
  };
  const handleTextChange = (text, title) => {
    setNewExpense((state) => ({
      ...state,
      [title]: text.replace(/,/g, "."),
    }));
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            value={newExpense.title}
            onChangeText={(text) => handleTextChange(text, "title")}
          />
        </View>
        <View style={styles.rowInputContainer}>
          <View style={styles.inputBorder}>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              placeholder="Value"
              value={newExpense.value}
              onChangeText={(text) => handleTextChange(text, "value")}
            />
          </View>
          <DateTimePicker
            id="registered"
            value={date}
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      </View>
      <PressableItem
        onPress={handleDispatch}
        containerStyle={styles.pressableItem}
      >
        <Text style={{ fontWeight: "bold" }}>Add</Text>
      </PressableItem>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: 18,
    width: 150,
    borderColor: "#E6E8EA",
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  pressableItem: {
    backgroundColor: "#FDDA0D",
    borderRadius: 8,
    width: 200,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  rowInputContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  inputBorder: { borderWidth: 1, borderColor: "#E6E8EA", borderRadius: 8 },
});
