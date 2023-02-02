import React, { useState, useEffect, createContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FullWindowOverlay } from 'react-native-screens';

export const MyContext = createContext();

function MyProvider({ children }) {

    const navigation = useNavigation();
    const [tasks, setTasks] = useState([]);
    
    const [user, setUser] = useState('');

    const addTask = (taskName, startDate, endDate, description) => {
        if(taskName != ""){
            setTasks([ ...tasks, { taskName, startDate, endDate, description }]);
            navigation.navigate('Tasks');
        }
    };

    return(
        <MyContext.Provider value={{ tasks, addTask }}>
            {children}
        </MyContext.Provider>
    )

}

export default MyProvider;