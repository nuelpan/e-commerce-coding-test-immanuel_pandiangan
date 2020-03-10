import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-native";
import {
  Container,
  Content,
  Card,
  Body,
  Text,
  CardItem,
  Button
} from "native-base";
import NumberFormat from "react-number-format";

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);
  const [detailProduct, setDetailProduct] = useState();

  useEffect(() => {
    const productId = props.route.params.productId;
    const product = products.filter(product => product.id === productId);
    setDetailProduct(product[0]);
  }, []);

  function handleBuy(id) {
    Alert.alert("hai");
  }
  return (
    <Container style={{ height: "auto" }}>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{detailProduct?.name}</Text>
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
            <Text>Qty:{detailProduct?.qty}</Text>
            <NumberFormat
              value={detailProduct?.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp."}
              renderText={value => <Text>{value}</Text>}
            />
          </CardItem>
        </Card>
        <Button
          rounded
          style={{ justifyContent: "center" }}
          onPress={() => handleBuy(detailProduct.id)}
        >
          <Text>Buy</Text>
        </Button>
      </Content>
    </Container>
  );
}
