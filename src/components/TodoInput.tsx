import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkTheme: boolean
}

export function TodoInput({ addTask, darkTheme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask(task: string) {
    if(task.length > 0){
      addTask(task)
    }
   
    setTask('');


  }

  return (
    <View style={[styles.inputContainer, darkTheme && {backgroundColor: '#212136'}, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, darkTheme && {backgroundColor: '#212136', color: '#E1E1E6'}]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={darkTheme ? '#E1E1E6' : '#A09CB1'}
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={() => handleAddNewTask(task)}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, darkTheme && {backgroundColor: '#565BFF'}]}
        onPress={() => handleAddNewTask(task)}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
   
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});