import React, {useState} from 'react';
import {TextInput, Modal, Text, TouchableOpacity, View, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';

import { modalStyles as styles } from '../styles';

const modal = ({addItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, updateDescription] = React.useState('');
  const [dueDate, updateDueDate] = React.useState('');

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        backgroundColor='rgba(0,0,0,0.6)'
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity style={styles.centeredView} 
                          activeOpacity={1} 
                          onPressOut={() => {setModalVisible(false)}} >
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add a New Item</Text>
              {/* <TextInput style={styles.input} value={title} placeholder="Title" onChangeText={updateTitle}></TextInput> */}
              <TextInput style={styles.input} value={description} placeholder="Description" onChangeText={updateDescription}></TextInput>
              <TextInput style={styles.input} value={dueDate} placeholder="Due by (optional)" onChangeText={updateDueDate}></TextInput>
              <TouchableHighlight
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                      addItem(description, dueDate);
                      updateDescription('');
                      updateDueDate('');
                      setModalVisible(!modalVisible);
                      }
                  }>
                <Text style={styles.textStyle}>Add Item</Text>
              </TouchableHighlight>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <TouchableHighlight
        style={[styles.buttonGlobal, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyleOpen}>+</Text>
      </TouchableHighlight>
      </>
  );
};

export default modal;