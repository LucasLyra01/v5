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

  const data = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
          <Timeline
            data={data}
            circleSize={20}
            circleColor="rgb(45,156,219)"
            lineColor="rgb(45,156,219)"
            timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
            timeStyle={{
              textAlign: "center",
              backgroundColor: "#ff9797",
              color: "#000",
              padding: 5,
              borderRadius: 13,
            }}
            descriptionStyle={{ color: "gray" }}
            options={{
              style: { paddingTop: 5 },
            }}
            isUsingFlatlist={true}
          />
    // <View style={styles.container}>
    //   <View style={styles.timelineContainer}>
    //     {etapas.map((item) => (
    //       <View style={styles.timelineStep} key={item.setor}>
    //         <View style={styles.timelineStepNumber} />
    //         <View style={styles.timelineStepContent}>
    //           <Text style={styles.timelineStepDate}>{`${item.hora}`}</Text>
    //           <Text style={styles.timelineStepTitle}>{item.setor}</Text>
    //           <Text style={styles.timelineStepDate}>{item.descricao}</Text>
    //         </View>
    //       </View>
    //     ))}
    //     <TouchableOpacity style={styles.addButton} onPress={openModal}>
    //       <Text style={styles.addButtonText}>Adicionar etapa</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <ModalTimeline isVisible={isModalVisible} closeModal={closeModal} />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
    paddingTop: 10,
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

export default EtapasScreen;
