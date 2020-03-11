import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Alert } from "react-native";
import {
  Label,
  Form,
  Container,
  Content,
  Card,
  Body,
  Text,
  CardItem,
  Button,
  Item,
  Input
} from "native-base";
import NumberFormat from "react-number-format";
import Modal from "react-native-modal";
import { buyProduct } from "../store/actions/productAction";

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);
  const user = useSelector(state => state.users.user);
  const token = useSelector(state => state.users.token);
  const [detailProduct, setDetailProduct] = useState({});
  const [modalVisible, setModalVisible] = useState("false");
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    const productId = props.route.params.productId;
    const product = products.filter(product => product.id === productId);
    setDetailProduct(product[0]);
  }, []);

  function handleBuy(id, visible) {
    setModalVisible(visible);
  }
  async function handleConfirmBuy(visible) {
    const totalPrice = detailProduct.price * quantity;
    const userCredits = user.credits;
    const payload = {
      userId: user.id,
      productId: detailProduct.id,
      requiredQty: quantity,
      token: token
    };
    if (totalPrice > userCredits) {
      Alert.alert("Insuficient Credits!");
    } else {
      await dispatch(buyProduct(payload));
      props.navigation.navigate("Home");
      setQuantity("1");
      setModalVisible(visible);
    }
  }
  function handleQuantity(text) {
    if (text > detailProduct.qty) {
      setQuantity(String(detailProduct.qty));
    } else {
      setQuantity(String(text));
    }
  }
  return (
    <Container style={{ height: "auto", padding: 20 }}>
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
          style={{
            justifyContent: "center",
            borderRadius: 22,
            marginTop: 16
          }}
          onPress={() => handleBuy(detailProduct.id, true)}
        >
          <Text>Buy</Text>
        </Button>

        <Modal
          style={{ justifyContent: "center" }}
          animationType="slide"
          coverScreen={false}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.modalView}>
            <Text style={{ fontWeight: "bold" }}>How many you want to buy</Text>
            <Form>
              <Item floatingLabel>
                <Label>Quantity</Label>
                <Input
                  onChangeText={text => handleQuantity(text)}
                  value={quantity}
                />
              </Item>
              <Item fixedLabel last>
                <Label>Total</Label>
                <NumberFormat
                  value={detailProduct?.price * quantity}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp."}
                  renderText={value => <Label>{value}</Label>}
                />
              </Item>
              <Button
                style={{
                  marginTop: 16,
                  justifyContent: "center",
                  borderRadius: 22
                }}
                onPress={() => handleConfirmBuy(false)}
              >
                <Text>Confirm</Text>
              </Button>
              <Button
                onPress={() => {
                  setQuantity("1");
                  setModalVisible(!modalVisible);
                }}
                style={{
                  marginTop: 16,
                  justifyContent: "center",
                  borderRadius: 22
                }}
                bordered
                primary
              >
                <Text>Cancel</Text>
              </Button>
            </Form>
          </View>
        </Modal>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  modalView: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 22,
    backgroundColor: "#fff",
    borderColor: "#e3e3e3",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});
