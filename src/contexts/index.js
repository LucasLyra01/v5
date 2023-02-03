import React, { useState, useEffect, createContext } from "react";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export const MyContext = createContext();

function MyProvider({ children }) {
  const [listaSetores, setListaValores] = [
    { label: "Compras", value: "Compras" },
    { label: "Transporte", value: "Transporte" },
    { label: "Cozinha", value: "Cozinha" },
  ];

  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  const [etapas, setEtapas] = useState([]);
  const [items, setItems] = useState([
    { label: "Compras", value: "Compras" },
    { label: "Transporte", value: "Transporte" },
    { label: "Cozinha", value: "Cozinha" },
  ]);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const [user, setUser] = useState("");

  const addTask = (taskName, startDate, endDate, description) => {
    if (taskName != "") {
      setTasks([...tasks, { taskName, startDate, endDate, description }]);
      navigation.navigate("Tasks");
    } else {
      setTasks([
        ...tasks,
        {
          taskName: "taskName",
          startDate: "01/01/2000",
          endDate: "02/01/2000",
          description: "alguma coisa",
        },
      ]);
      navigation.navigate("Tasks");
    }
  };

  const addEtapas = (setor, descricao) => {

    const hora = moment().format("HH:mm")

    if (setor != "" && descricao != "") {
      setEtapas([
        ...etapas,
        { time: hora, title: setor, description: descricao }, // utilizar icones aqui
        // { time: "10:45", title: "Event 2", description: "Event 2 Description" },
      ]);
      navigation.navigate("Etapas");
    }

  };

  return (
    <MyContext.Provider value={{ tasks, addTask, etapas, addEtapas, items, setItems }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
