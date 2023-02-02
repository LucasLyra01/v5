import React, { useState, useEffect } from 'react';

const useAddTask = (navigation, taskname) => {

    console.log('taskname' + taskname);
    useEffect(() => {

        (function addTask(){
            const [tasks, setTasks] = useState([]);
        
            // setTasks([ ...tasks, { taskname } ])
        
            // navigation.navigate('Tasks');
        })()

        
    })


}

export default useAddTask;