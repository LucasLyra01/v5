import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MaskedText from "react-native-masked-text";
// import { TaskContext } from "./TaskScreen";
// import useAddTask from "../hook/addTask";
import { MyContext } from "../contexts";
import moment from "moment";

const TaskCreateScreen = ({ navigation }) => {
  const { addTask } = useContext(MyContext);

  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  // const [tasks, setTasks] = useState([]);

  const handleSave = () => {
    addTask(taskName, startDate, endDate, description);
    // setTasks([...tasks, { taskName, startDate, endDate, description }]);
    setTaskName("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    // navigation.navigate('Tasks');
  };

  const tempo = () => {
    const currentDate = moment().format("DD/MM/YYYY");
    const hour = moment().format("HH:mm:ss")

    const date = new Date();

    console.log(currentDate, hour)
    // console.log(date.getTime());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da tarefa:</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
        placeholder="Digite o nome da tarefa"
        placeholderTextColor="#333"
      />
      <View style={styles.dateContainer}>
        <View style={styles.dateItem}>
          <Text style={styles.label}>Data de início:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={startDate}
            onChangeText={(text) => setStartDate(text)}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#333"
          />
        </View>
        <View style={styles.dateItem}>
          <Text style={styles.label}>Data de fim:</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            value={endDate}
            onChangeText={(text) => setEndDate(text)}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#333"
          />
        </View>
      </View>
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholder="Digite a descrição da tarefa"
        placeholderTextColor="#333"
        multiline={true}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate("Tasks")}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Adicionar tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={tempo}>
          <Text style={styles.buttonText}>Tempo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
    paddingTop: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 10,
    color: "#000",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: 20,
  },
  dateItem: {
    width: "45%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  addButton: {
    backgroundColor: "#33CC33",
    padding: 10,
    borderRadius: 2,
  },
  cancelButton: {
    backgroundColor: "#FF3333",
    padding: 10,
    borderRadius: 2,
  },
  buttonText: {
    color: "#FFF",
  },
});

export default TaskCreateScreen;
