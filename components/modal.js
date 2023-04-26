import React, {useState} from 'react';
import {TextInput, Modal, StyleSheet, Text, TouchableOpacity , View, TouchableHighlight} from 'react-native';

const modal = ({addItem}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, updateTitle] = React.useState('');
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
        <TouchableOpacity style={styles.centeredView} activeOpacity={1} 
            onPressOut={() => {setModalVisible(false)}} >
          <View style={styles.modalView}>
            <TextInput style={styles.input} value={title} placeholder="Title" onChangeText={updateTitle}></TextInput>
            <TextInput style={styles.input} value={description} placeholder="Description" onChangeText={updateDescription}></TextInput>
            <TextInput style={styles.input} value={dueDate} placeholder="Due Date" onChangeText={updateDueDate}></TextInput>
            <TouchableHighlight
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                    addItem(title, description, dueDate);
                    updateTitle('');
                    updateDescription('');
                    updateDueDate('');
                    setModalVisible(!modalVisible);
                    }
                }>
              <Text style={styles.textStyle}>Add Item</Text>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableHighlight
        style={[styles.buttonGlobal, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add</Text>
      </TouchableHighlight>
      </>
  );
};

const styles = StyleSheet.create({
    input: {
        width: 220,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 50,
    },
    buttonGlobal: {
        borderRadius: 50,
        padding: 20,
        position: 'absolute',
        bottom: 40,
        right: 20,
        elevation: 50,
        alignSelf:'flex-end'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',

    },
    modalText: {
        textAlign: 'center',
    },
});

export default modal;