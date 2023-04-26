import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform } from 'react-native';
import React, {useState} from 'react';
import Layout from './components/layout';
import Cards from './components/cards'
import Modal from './components/modal';

export default function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);

  const removeItem = (idToRemove) =>{
    setItems(items.filter(item => item.itemId !== idToRemove));
  }

  const addItem = (title, desc, due) => {
    if (title !== '' && desc !== '' && due !== ''){
      setId(id+1);
      setItems(items => [...items, {itemId: id, title: title, description: desc, dueDate: due}]);
    }
  }

  return (
    <>
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
        <ScrollView>
          {
            items.map((item) => 
              <Cards key={item.itemId} 
                      itemId={item.itemId}
                      title={item.title} 
                      description={item.description} 
                      dueDate={item.dueDate}
                      removeItem={removeItem}
                      >
              </Cards>)
          }
        </ScrollView>
        <Modal addItem={addItem}></Modal>
        <ExpoStatusBar style="auto" />
      </View>
      <View style={styles.navMenu}>
        <Text>NAVMENU</Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeareaview:{
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
    justifyContent: 'space-evenly',
  },
  navMenu: {
    flex: 1,
    padding: 10,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems:'center'
  },
});
