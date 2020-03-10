import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import NumberFormat from "react-number-format";

export default function ProductCard(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Detail", {
          productId: props.product.id
        });
      }}
    >
      <Container style={{ height: "auto" }}>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>{props.product.name}</Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              bordered
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>Qty:{props.product.qty}</Text>
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
