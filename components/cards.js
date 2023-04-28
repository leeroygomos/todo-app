import { useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';

import { cardStyles } from '../styles';

const cards = ({itemId, description, completed, removeItem, completeItem}) => {
    const [done, finishItem] = useState(completed);
    
    return (
        <Card mode={'outlined'} style={cardStyles.container}>
            <Card.Content>
                <Text style={done ? cardStyles.completedText: cardStyles.text}>{description}</Text>
            </Card.Content>
            <Card.Actions>
                <Button textColor={'#FFFFFF'} 
                        buttonColor={'#0E8388'}
                        mode={'contained'} 
                        onPress={() => removeItem(itemId)}>Remove</Button>
                <Button textColor={'#FFFFFF'} 
                        buttonColor={'#2E4F4F'} 
                        mode={'contained'} 
                        onPress={() => {completeItem(itemId); finishItem(!done)}}>Done</Button>
            </Card.Actions>
        </Card>
    );
}

export default cards;