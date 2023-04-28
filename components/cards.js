import { useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';

import { cardStyles } from '../styles';

const cards = ({itemId, description, removeItem}) => {
    const [complete, completeItem] = useState(false);
    
    return (
        <Card elevation={5} cardMode={'elevated'} style={cardStyles.container}>
            <Card.Content>
                <Text style={complete ? cardStyles.completedText: cardStyles.text}>{description}</Text>
            </Card.Content>
            <Card.Actions>
                <Button textColor={'#FFFFFF'} buttonColor={'#d3273e'} onPress={() => removeItem(itemId)}>Remove</Button>
                <Button textColor={'#FFFFFF'} buttonColor={'#41b6e6'} onPress={() => completeItem(!complete)}>Done</Button>
            </Card.Actions>
        </Card>
    );
}

export default cards;