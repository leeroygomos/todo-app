import React, {useState, useEffect} from 'react';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {Text, View, TouchableOpacity, Pressable, ScrollView} from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Cards from './components/cards'
import Modal from './components/modal';

import {styles} from './styles';

const ITEMS_KEY = 'ITEMS';
const ID_KEY = 'ID';
const EMPTY_MESSAGE = 'Congratulations! You have nothing to do!';

export default function App() {
  const [items, setItems] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const restoreData = async () => {
      const getItems = await AsyncStorage.getItem(ITEMS_KEY);
      const getId = await AsyncStorage.getItem(ID_KEY);

      if (getItems !== null){
        setItems(JSON.parse(getItems));
      }
      else{
        setItems([]);
      }
      if (getId !== null){
        setId(JSON.parse(getId));
      }
      else{
        setId();
      }
    }

    if (items === undefined && id === undefined){
      restoreData();
    }

  }, []);

  useEffect(() => {
    if (items !== undefined){
      saveItems();
    }
  }, [items]);

  useEffect(() => {
    if (id !== undefined){
      saveId();
    }
  }, [id]);

  const saveItems = async () => {
    await AsyncStorage.setItem(ITEMS_KEY, JSON.stringify(items));
  }

  const saveId = async () => {
    await AsyncStorage.setItem(ID_KEY, JSON.stringify(id));
  }

  const removeItem = (idToRemove) =>{
    setItems(items.filter(item => item.itemId !== idToRemove));

  }

  const addItem = (desc) => {
    if (desc !== ''){
        setId(id+1);
        setItems((items => [...items, {itemId: id, description: desc, completed: false}]));
    }
  }

  const completeItem = (idToComplete) => {
    let updatedItems = items;
    let index = updatedItems.findIndex((item) => item.itemId == idToComplete);
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  }

  const getRandomActivity = () => {
    fetch('http://www.boredapi.com/api/activity/')
      .then(response => response.json())
      .then(json => addItem(json.activity));
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
              completed={item.completed}
              removeItem={removeItem}
              completeItem={completeItem}/>
      </TouchableOpacity>
    </ScaleDecorator>
    )
  }

  return ( (items === undefined && id === undefined) ? 
    <>
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingMessage}>Loading</Text>
      </View>
    </> 
    :
    <>
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>To Do List</Text>
      </View>
      <View style={styles.container}>
        {
          items.length === 0 ? 
            <>
            <ConfettiCannon count={200} 
                            origin={{x: -100, y: 0}} 
                            autoStart={true} 
                            fadeOut={true}
                            explosionSpeed={500}/>
            <Text style={styles.emptyMessage}>{EMPTY_MESSAGE}</Text> 
            </>
            :
            <>
            <GestureHandlerRootView>
              <DraggableFlatList
                data={items}
                keyExtractor={item => item.itemId}
                onDragEnd={({ data }) => {
                    setItems(data);
                  }}
                renderItem={renderItem}
                style={styles.list}
              />
            </GestureHandlerRootView>
            </>
        }
        <Modal addItem={addItem}></Modal>
        <Pressable style={styles.button} onPress={getRandomActivity}><Text style={styles.buttonText}>Bored?</Text></Pressable>
        {/* <ExpoStatusBar style="auto" /> */}
      </View>
    </View>
    </>
  );
}
