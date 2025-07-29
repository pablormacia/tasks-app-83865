import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';
import ConfirmDeleteModal from './src/components/ConfirmDeleteModal';

export default function App() {
  const [userInput, setUserInput] = useState("")
  const [tasksList, setTasksList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected,setTaskSelected] = useState({})

  console.log("User input:", userInput)
  console.log("Lista de tareas", tasksList)
  console.log("Task selected:", taskSelected)

  const handleAddTask = () => {
    if(!userInput){
      console.warn("El campo está vacío")
      return
    }
    setTasksList([...tasksList, { id: Math.random(), value: userInput }])
    setUserInput("")
  }

  const deleteTask = () =>{
    setTasksList(tasksList.filter(task => task.id !== taskSelected.id))
    setModalVisible(false)
  }

  const handleDeleteItem = (item) => {
    setTaskSelected(item)
    setModalVisible(true)
    //setTasksList(tasksList.filter(task => task.id !== id))
  }

  const renderTaskItem = ({ item }) => {
    console.log("item de flatlist:", item)
    return (
      <View style={styles.taskContainer}>
        <Text>{item.value}</Text>
        <Button color="red" title="X" onPress={() => handleDeleteItem(item)} />
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.taskInputContainer}>
          <TextInput style={styles.taskInput}
            onChangeText={(text) => setUserInput(text)}
            placeholder="¿Qué querés hacer hoy?"
            value={userInput}
          />
          <Button title="+" onPress={handleAddTask} />
        </View>
        {/* <View style={styles.tasksListContainer}>
        {
          tasksList.map((task,index)=>(
            <View style={styles.task}>
              <Text key={index}>{task}</Text>
            </View>
            
          ))
        }
      </View> */}
        <View style={styles.tasksListContainer}>
          <FlatList
            data={tasksList}
            renderItem={renderTaskItem}
            keyExtractor={item => item.id}
          />
        </View>
        <StatusBar style="auto" />
      </View>
      <ConfirmDeleteModal
        modalVisibleDown={modalVisible}
        taskSelectedTitledDown={taskSelected.value}
        setModalVisibleUp = {setModalVisible}
        deleteTaskUp={deleteTask}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: 56,
  },
  taskInputContainer: {
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8
  },
  taskInput: {
    padding: 8,
    paddingLeft: 16,
    borderColor: "#000",
    borderWidth: 0.6,
    borderRadius: 16,
    width: "85%"
  },
  tasksListContainer: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  taskContainer: {
    padding: 8,
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  }

});
