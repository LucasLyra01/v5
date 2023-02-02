import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Task = ({ taskName, startDate, endDate, description }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{taskName}</Text>
      <Text style={styles.taskDate}>
        {startDate.toString()} - {endDate.toString()}
      </Text>
      <Text style={styles.taskDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    color: "#FFF",
    backgroundColor: "#6200EE",
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  taskName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskDate: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 10,
  },
});
export default Task;
