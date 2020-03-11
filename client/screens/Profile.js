import React, { useEffect } from "react";
import { StyleSheet, View, Alert, AsyncStorage } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Label
} from "native-base";
import { logout, setToken } from "../store/actions/userAction";
import NumberFormat from "react-number-format";

export default function Profile(props) {
  const token = useSelector(state => state.users.token);
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  async function handleLogout() {
    try {
      await AsyncStorage.clear();
      await dispatch(setToken(null));
      await dispatch(logout);
      checkToken();
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  async function checkToken() {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value === null) {
        props.navigation.navigate("Login");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Container>
      <Content padder>
        <Card>
          <CardItem bordered>
            <Body>
              <Label>Name</Label>
              <Text>{user.name}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Label>Username</Label>
              <Text>{user.username}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Label>Credits</Label>
              {user.credits ? (
                <NumberFormat
                  value={user.credits}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp."}
                  renderText={value => <Text>{value}</Text>}
                />
              ) : (
                <Text>Rp. 0</Text>
              )}
            </Body>
          </CardItem>
          <CardItem style={{}} footer bordered>
            <Button
              bordered
              onPress={() => handleLogout()}
              style={{
                justifyContent: "center",
                marginLeft: "auto",
                borderRadius: 22
              }}
            >
              <Text>Logout</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
