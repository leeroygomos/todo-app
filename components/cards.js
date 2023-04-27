import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const cards = ({itemId, title, description, dueDate, removeItem}) => {
    
    const [complete, completeItem] = React.useState(false);
    
    return (
        <View style={cardStyles.container}>
            <Card>
                <Card.Title titleVariant='titleLarge' 
                            title={title} 
                            subtitle={"Due: " + dueDate} 
                            subtitleStyle={complete ? cardStyles.completedText: cardStyles.text}
                            subtitleVariant='labelSmall' 
                            titleStyle={complete ? cardStyles.completedText: cardStyles.text}/>
                <Card.Content>
                <Text variant="bodyMedium" style={complete ? cardStyles.completedText: cardStyles.text}>{description}</Text>
                </Card.Content>
                {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                <Card.Actions>
                    <Button onPress={() => removeItem(itemId)}>Remove</Button>
                    <Button onPress={() => completeItem(!complete)}>Done</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    container: {
      paddingTop:10,
    },
    text:{
        
    },
    completedText:{
        textDecorationLine: 'line-through'
    }
  });

export default cards;