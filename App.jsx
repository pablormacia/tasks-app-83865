import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskInputContainer}>
        <TextInput style={styles.taskInput} 
          onChangeText={()=>{}}
          placeholder="¿Qué querés hacer hoy?"
        />
        <Button title="+" onPress={()=>{}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: 56,
  },
  taskInputContainer: {
    //paddingHorizontal:16,
    flexDirection:"row",
    justifyContent:"center",
    gap: 8
  },
  taskInput:{
    padding:8,
    paddingLeft: 16,
    borderColor: "#000",
    borderWidth:0.6,
    borderRadius: 16,
    width: "85%"
  }
});
