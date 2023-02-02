import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import { MyContext } from "../contexts";
import Task from "../components/Task";

const TasksScreen = ({ navigation }) => {
  // const [tasks, setTasks] = useState([]);

  const { tasks } = useContext(MyContext);

  const taskDetails = ( task ) => {
    navigation.navigate("TaskDetails", { task });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.taskName}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={ () => taskDetails(item) }>
            <Task taskName={item.taskName} startDate={item.startDate} endDate={item.endDate} description={item.description} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("TaskCreate")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 0
  },
  addButton: {
    backgroundColor: "#6200EE",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default TasksScreen;
