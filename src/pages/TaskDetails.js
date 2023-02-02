import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import ModalTimeline from "../components/ModalTimeline";

const TaskDetails = (props, { route }) => {
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const task = props.route.params.task;

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da tarefa:</Text>
      <Text style={styles.input} placeholderTextColor="#333">
        {task.taskName}
      </Text>
      <View style={styles.dateContainer}>
        <View style={styles.dateItem}>
          <Text style={styles.label}>Data de início:</Text>
          <Text style={styles.input} placeholderTextColor="#333">
            {task.startDate}
          </Text>
        </View>
        <View style={styles.dateItem}>
          <Text style={styles.label}>Data de fim:</Text>
          <Text style={styles.input} placeholderTextColor="#333">
            {task.endDate}
          </Text>
        </View>
      </View>
      <Text style={styles.label}>Descrição:</Text>
      <Text style={styles.input} placeholderTextColor="#333" multiline={true}>
        {task.description}
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Etapas")}
        >
          <Text style={styles.buttonText}>Ver Etapas</Text>
        </TouchableOpacity>
      </View>
      {/* <ModalTimeline isVisible={isModalVisible} closeModal={closeModal} /> */}
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
    justifyContent: "center",
    padding: 20,
  },
  addButton: {
    backgroundColor: "#33CC33",
    padding: 10,
    borderRadius: 4,
    color: '#FFF',
  },
});

export default TaskDetails;
