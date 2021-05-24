import React, { useState } from 'react';
import {Switch, View, StyleSheet} from 'react-native'
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  function onDarkThemeChange(){
    setIsEnabled(prevState => !prevState)
  }


  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    setTasks(prevState => [...prevState, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    console.log(id, 'ID MARK AS DONE')
    let foundTask: any = tasks.find(item => item.id === id)
    foundTask = {...foundTask, done: true}
    let removeItem = tasks.filter(task => task.id !== id)
    removeItem = [...removeItem, foundTask]
    setTasks(removeItem)
  }

  function handleRemoveTask(id: number) {
    console.log(id, 'IDDIIDIDDD')
    const removeItem = tasks.filter(task => task.id !== id)
    if(removeItem.length > 0){
      setTasks(removeItem)
    } else{
      setTasks([])
    }
    
    //TODO set case when the array is empty
  }

  return (
    <View style={isEnabled && styles.container}>
      <Header darkTheme={isEnabled} />
     
      <TodoInput darkTheme={isEnabled} addTask={handleAddTask} />
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#565BFF" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onDarkThemeChange}
        value={isEnabled}
      />
      <MyTasksList 
      darkTheme={isEnabled}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#10101E'
  }
})