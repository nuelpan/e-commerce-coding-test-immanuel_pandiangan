import React, { useEffect, useState } from "react";
import { AsyncStorage, Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/userAction";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState("eye-slash");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getToken();
  });

  async function getToken() {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        props.navigation.navigate("Profile");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  function handleEye() {
    if (eye === "eye-slash") {
      setEye("eye");
      setPasswordVisibility(false);
    } else {
      setEye("eye-slash");
      setPasswordVisibility(true);
    }
  }

  async function handleLogin() {
    try {
      const payload = {
        username,
        password
      };
      await dispatch(login(payload));
      let token = await AsyncStorage.getItem("token");
      if (token !== null) {
        setUsername("");
        setPassword("");
        props.navigation.navigate("Profile");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input onChangeText={text => setUsername(text)} value={username} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              placeholder="Icon Alignment in Textbox"
              secureTextEntry={passwordVisibility}
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <Icon
              type="FontAwesome"
              active
              name={eye}
              style={{ fontSize: 18 }}
              onPress={() => handleEye()}
            />
          </Item>
          <Button
            style={{
              marginTop: 16,
              justifyContent: "center"
            }}
            rounded
            onPress={() => handleLogin()}
          >
            <Text>Login</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
