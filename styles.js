import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    title:{
      padding: 15,
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: "center",
      color: '#FFFFFF'
    },
    root:{
      flex:1,
      backgroundColor: '#000000',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
    },
    container: {
      flex: 1,
      padding: 10,
      alignContent: 'space-between',
    },
    list:{
        marginBottom: 110,
    },
    emptyMessage:{
      textAlign: "center",
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
    button:{
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        borderRadius: 50,
        padding: 10,
        bottom: 40,
        left: 20,
        position: 'absolute',
        borderWidth: 0.1,
        elevation: 10,
        shadowColor: '#000000',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 15,
    }
});

const modalStyles = StyleSheet.create({
    input: {
        width: 220,
        height: 40,
        margin: 12,
        borderWidth: 0.1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)'
      },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 1,
        backgroundColor: '#FFFFFF',
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
        paddingLeft: 20,
        paddingRight: 20,
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
        backgroundColor: '#FFFFFF',
        borderWidth: 0.1,
        elevation: 10,
        shadowColor: '#000000',
        borderRadius: 50,
        fontSize: 25,
    },
    buttonClose: {
        backgroundColor: '#00bfb2'
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'left',
    },
    textStyleOpen: {
      color: '#000000',
      textAlign: 'left',
      fontSize: 50,
    },
    modalText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 20
    },
});

const cardStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: '#00bfb2',
        shadowColor: '#FFFFFF',
    },
    text:{
        fontSize: 20
    },
    completedText:{
        textDecorationLine: 'line-through',
        fontSize: 20
    },
    button:{
        color: '#FFFFFF',
        backgroundColor: "#FFFFFF",
        textColor: "#007a78"
    }
});

export {styles, modalStyles, cardStyles};