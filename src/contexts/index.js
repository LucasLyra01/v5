import React, { useState, useEffect, createContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FullWindowOverlay } from 'react-native-screens';

export const MyContext = createContext();

function MyProvider({ children }) {

    const [listaSetores, setListaValores] = ([
        { label: "Compras", value: "Compras" },
        { label: "Transporte", value: "Transporte" },
        { label: "Cozinha", value: "Cozinha" }
    ]);

    const navigation = useNavigation();
    const [tasks, setTasks] = useState([]);
    const [etapas, setEtapas] = useState([]);
    
    const [user, setUser] = useState('');

    const addTask = (taskName, startDate, endDate, description) => {
        if(taskName != ""){
            setTasks([ ...tasks, { taskName, startDate, endDate, description }]);
            navigation.navigate('Tasks');
        }else{
            setTasks([ ...tasks, { taskName: 'taskName', startDate: '01/01/2000', endDate: '02/01/2000', description: 'alguma coisa' }])
            navigation.navigate('Tasks');
        }
    };

    const addEtapas = (setor, descricao, data, hora) => {
        if(setor != "" || descricao != ""){
            setEtapas([ ...etapas, { hora, setor, descricao }]);
            navigation.navigate('Etapas');
        }
    };

    return(
        <MyContext.Provider value={{ tasks, addTask, etapas, addEtapas }}>
            {children}
        </MyContext.Provider>
    )

}

export default MyProvider;