import React, { useState } from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const ModalTimeline = ({ isVisible, closeModal }) => {
  const [dados, setDados] = useState([
    { id: 1, title: "Tarefa 1", date: "01/01/2021" },
    { id: 2, title: "Tarefa 2", date: "02/01/2021" },
    { id: 3, title: "Tarefa 3", date: "03/01/2021" },
  ]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={closeModal}
          >
            <Text style={styles.modalCloseText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Modal</Text>

          <View style={styles.timelineContainer}>
            {dados.map((item) => (
              <View style={styles.timelineStep} key={item.id}>
                <View style={styles.timelineStepNumber} />
                <View style={styles.timelineStepContent}>
                  <Text style={styles.timelineStepTitle}>{item.title}</Text>
                  <Text style={styles.timelineStepDate}>{item.date}</Text>
                </View>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Adicionar etapa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseButton: {
    position: "absolute",
    right: 10,
    top: 5,
  },
  modalCloseText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  timelineContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  timelineStep: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timelineStepNumber: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#333",
    marginRight: 20,
  },
  timelineStepContent: {
    flex: 1,
  },
  timelineStepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  timelineStepDate: {
    fontSize: 14,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ModalTimeline;
