import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View, TouchableHighlight, Alert} from 'react-native';

const cards = ({itemId, title, description, dueDate, removeItem, completeItem}) => {
    return (
        <View style={cardStyles.container}>
            <Card>
                <Card.Title titleVariant='titleLarge' title={itemId +'. '+ title} subtitle={"Due: " + dueDate} subtitleVariant='labelSmall' titleStyle={cardStyles.text}/>
                <Card.Content>
                <Text variant="bodyMedium">{description}</Text>
                </Card.Content>
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Actions>
                <Button onPress={() => removeItem(itemId)}>Remove</Button>
                <Button onPress={() => completeItem(itemId)}>Done</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    container: {
      paddingTop: 10,
    },
    text:{
        textDecorationLine: 'line-through'
    }
  });

export default cards;