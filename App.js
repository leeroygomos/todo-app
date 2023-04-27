import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, FlatList, Touchable, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Layout from './components/layout';
import Cards from './components/cards'
import Modal from './components/modal';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";

export default function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);

  const removeItem = (idToRemove) =>{
    setItems(items.filter(item => item.itemId !== idToRemove));
  }

  const addItem = (title, desc, due) => {
    if (title !== '' || desc !== '' || due !== ''){
      setId(id+1);
      setItems(items => [...items, {itemId: id, title: title, description: desc, dueDate: due}]);
    }
  }

  const renderItem = ({ item, drag, isActive }) =>{
    return(
    <ScaleDecorator>
      <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          backgroundColor={ isActive ? "red" : "black" }
        >
        <Cards itemId={item.itemId}
            title={item.title} 
            description={item.description} 
            dueDate={item.dueDate}
            removeItem={removeItem}/>
      </TouchableOpacity>
    </ScaleDecorator>
    )
  }

  return (
    <>
    <GestureHandlerRootView style={styles.root}>
      <View>
        <Text style={styles.title}>To Do:</Text>
      </View>
      <View style={styles.container}>
        <DraggableFlatList
          data={items}
          keyExtractor={item => item.itemId}
          onDragEnd={({ data }) => setItems(data)}
          renderItem={renderItem}
        />
        <Modal addItem={addItem}></Modal>
        <ExpoStatusBar style="auto" />
      </View>
      <View style={styles.navMenu}>
        <Text>NAVMENU</Text>
      </View>
    </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  title:{
    flex: 0,
    justifyContent: 'center',
    padding: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  root:{
    flex:1,
    backgroundColor:'#ABCDD4',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  banner: {
    flex: 0,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems:'center'
  },
  container: {
    flex: 20,
    padding: 10,
  },
  navMenu: {
    flex: 1,
    padding: 10,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems:'center'
  },
});
