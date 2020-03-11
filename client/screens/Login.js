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
import { useDispatch } from "react-redux";
import { login } from "../store/actions/userAction";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState("eye-slash");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const dispatch = useDispatch();

  function handleEye() {
    if (eye === "eye-slash") {
      setEye("eye");
      setPasswordVisibility(false);
    } else {
      setEye("eye-slash");
      setPasswordVisibility(true);
    }
  }

  function handleLogin() {
    const payload = {
      username,
      password
    };
    dispatch(login(payload));
  }

  return (
    <Container>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input onChangeText={text => setUsername(text)} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              placeholder="Icon Alignment in Textbox"
              secureTextEntry={passwordVisibility}
              onChangeText={text => setPassword(text)}
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
