import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import NumberFormat from "react-number-format";

export default function ProductCard(props) {
  return (
    <TouchableOpacity>
      <Container style={{ height: "auto" }}>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>{props.product.name}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <NumberFormat
                value={props.product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp."}
                renderText={value => <Text>{value}</Text>}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    </TouchableOpacity>
  );
}
