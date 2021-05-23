import React, { useState } from 'react';

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
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}