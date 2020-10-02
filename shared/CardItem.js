import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardItem = (props) => (
  
    <Card>
      <Card.Cover source={{ uri: `${props.product.photo}` }} />
      <Card.Content>
        <Paragraph style={styles.slot}>
            <Text>
              ${props.product.price}
            </Text>
        </Paragraph>
        <Title style={styles.titleBox}>{props.product.name}</Title>
      </Card.Content>
      {/* <Paragraph>Descripción:</Paragraph>
      <Paragraph>{props.product.description}</Paragraph> */}
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </Card>
  
);

const styles = StyleSheet.create({
  titleBox: {
    minHeight: 110,
  },
  slot: {
    minHeight: 30,
    alignItems: 'flex-end',
    marginTop: 10,
    fontSize: 20,

  },
});

export default CardItem;
