import React, {useState} from 'react';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {Text, View, TouchableOpacity, Pressable} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";

import Cards from './components/cards'
import Modal from './components/modal';

import {styles, modalStyles} from './styles';

export default function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);

  const removeItem = (idToRemove) =>{
    setItems(items.filter(item => item.itemId !== idToRemove));
    if(items.length === 0){
      //TODO celebration
    }
  }

  const addItem = (desc, due) => {
    if (desc !== ''){
        setId(id+1);
        setItems(items => [...items, {itemId: id, description: desc, dueDate: due}]);
    }
  }

  const getRandomActivity = () => {
    fetch('http://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(json => addItem(json.activity, ''));
  }

  const renderItem = ({ item, drag, isActive }) => {
    return(
    <ScaleDecorator>
      <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
        >
        <Cards itemId={item.itemId}
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
        <Text style={styles.title}>To Do List</Text>
      </View>
      <View style={styles.container}>
        {
          items.length === 0 ? 
            <Text style={styles.emptyMessage}>
              Congratulations! You have nothing to do!
            </Text> 
            : <></>
        }
        <DraggableFlatList
          data={items}
          keyExtractor={item => item.itemId}
          onDragEnd={({ data }) => {
              setItems(data);
            }}
          renderItem={renderItem}
        />
        <Modal addItem={addItem}></Modal>
        <Pressable style={styles.button} onPress={getRandomActivity}><Text style={styles.buttonText}>Bored?</Text></Pressable>
        <ExpoStatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
    </>
  );
}
