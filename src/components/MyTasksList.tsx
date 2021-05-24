import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface ToDarkTheme {
  darkTheme: boolean,
}

function FlatListHeaderComponent({darkTheme}: ToDarkTheme) {
  return (
    <View>
      <Text style={[styles.header, darkTheme && {color: '#565BFF'}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkTheme: boolean,
}

export function MyTasksList({ tasks, onLongPress, onPress, darkTheme }: MyTasksListProps) {
  console.log('TASKS LIST',tasks)
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onLongPress={() => onLongPress(item.id)}
            onPress={() => onPress(item.id)}
           style={ darkTheme
            ?[item.done ? styles.taskButtonDoneDark : styles.taskButton] 
            :[item.done ? styles.taskButtonDone : styles.taskButton]}
          >
            <View 
              testID={`marker-${index}`}
              style={darkTheme
                ? [item.done ? styles.taskMarkerDoneDark : styles.taskMarkerDark]
                :[item.done ? styles.taskMarkerDone : styles.taskMarker]}
               
            />
            <Text 
            style={darkTheme ?
              [item.done ? styles.taskTextDoneDark : styles.taskTextDark]:
              [item.done ? styles.taskTextDone : styles.taskText]
            }
              
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent darkTheme={darkTheme}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={[{marginHorizontal: 24,marginTop: 32}, darkTheme && {backgroundColor: '#10101E'}]}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565BFF',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#E1E1E6',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(33, 33, 54, 0.3)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#565BFF',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskTextDoneDark: {
    color: 'rgba(225, 225, 230, 0.6)',
    textDecorationLine: 'line-through'
  }
})