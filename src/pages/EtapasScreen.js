import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalTimeline from "../components/ModalTimeline";
import Timeline from "react-native-timeline-flatlist";
import { MyContext } from "../contexts";

const EtapasScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const { etapas } = useContext(MyContext);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Timeline
        data={etapas}
        circleSize={20}
        innerCircle={'icon'}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{ minWidth: 52 }}
        timeStyle={{
          textAlign: "center",
          backgroundColor: "#ff9797",
          color: "#000",
          padding: 2,
          borderRadius: 10,
        }}
        titleStyle={{
          color: "#000",
          marginTop: -10,
          // backgroundColor: '#000'
        }}
        descriptionStyle={{
          color: "gray",
          height: 60,
        }}
        options={{
          style: { paddingTop: 5 },
        }}
        // isUsingFlatlist={true}
      />
      <View style={styles.buttonEtapas}>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={styles.addButtonText}>Adicionar etapa</Text>
        </TouchableOpacity>
      </View>
      <ModalTimeline isVisible={isModalVisible} closeModal={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
    paddingTop: 10,
  },
  buttonEtapas: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: "100%",
  },
  addButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default EtapasScreen;
