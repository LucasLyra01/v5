import React, { useState, useContext } from "react";
import { Modal, View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import moment from 'moment';
import { MyContext } from "../contexts";

const ModalTimeline = ({ isVisible, closeModal }) => {
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Compras", value: "Compras" },
    { label: "Transporte", value: "Transporte" },
    { label: "Cozinha", value: "Cozinha" },
  ]);

  const { addEtapas } = useContext(MyContext);

  const salvarEtapa = () => {
    const data = moment().format("DD/MM/YYYY");
    const hora = moment().format("HH:MM")

    addEtapas(value, desc, data, hora);
    setDesc('');
    setValue('');
    closeModal();
  };

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
          <Text style={styles.modalTitle}>Adicionar etapa</Text>

          <View style={styles.dropdown}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              stickyHeader={true}
              zIndex={1000}
              //   style={{
              //     backgroundColor: "crimson"
              //   }}
              textStyle={{
                fontSize: 15,
              }}
              placeholder="Selecione a etapa"
            />
            <TextInput
                style={styles.input}
                value={desc}
                onChangeText={(text) => setDesc(text)}
                placeholder="Descrição da tarefa"
                placeholderTextColor="#333"
            />
          </View>

          {/* <View style={styles.timelineContainer}>
            {dados.map((item) => (
              <View style={styles.timelineStep} key={item.id}>
                <View style={styles.timelineStepNumber} />
                <View style={styles.timelineStepContent}>
                  <Text style={styles.timelineStepTitle}>{item.title}</Text>
                  <Text style={styles.timelineStepDate}>{item.date}</Text>
                </View>
              </View>
            ))}
          </View> */}
          <TouchableOpacity style={styles.addButton} onPress={salvarEtapa}>
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
    // justifyContent: "center",
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
    // marginBottom: 20,
    // position: "absolute",
    // top: 15,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  dropdown: {
    padding: 10,
    // position: "absolute",
    top: 25,
    width: "80%",
  },
  addButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    // marginTop: 20,
    position: "absolute",
    bottom: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ModalTimeline;
