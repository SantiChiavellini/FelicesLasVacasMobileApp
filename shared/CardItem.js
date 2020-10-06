import * as React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardItem = (props) => (
  
    <Card>
      <Card.Cover source={{ uri: `${props.product.photo}` }} />
      <Card.Content style={styles.cardBody}>
      <Title style={styles.titleBox}>{props.product.name}</Title>
        <Paragraph style={styles.slot}>
            <Text>
              ${props.product.price} c/u
            </Text>
        </Paragraph>
        
      </Card.Content>
    </Card>
  
);

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    paddingTop: 15,
  },
  titleBox: {
    minHeight: 115,
    flex: 1,
    flexShrink: 0,
    fontSize:15,
    color:"#009387"
  },
  slot: {
    minHeight: 30,
    alignItems: 'flex-end',
    color:"#009387",
    fontSize: 20,
    textAlign:"right"

  },
});

export default CardItem;
