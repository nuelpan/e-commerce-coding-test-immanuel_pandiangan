import React, { useEffect, useState } from "react";
import { StyleSheet, AsyncStorage, Alert } from "react-native";
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
import { register } from "../store/actions/userAction";

export default function Register(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credits, setCredits] = useState("");
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

  async function handleRegister() {
    try {
      const payload = {
        name,
        username,
        password,
        credits
      };
      await dispatch(register(payload));
      props.navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container style={style.container}>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Name</Label>
            <Input onChangeText={text => setName(text)} value={name} />
          </Item>
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
          <Item floatingLabel>
            <Label>Credits</Label>
            <Input onChangeText={text => setCredits(text)} value={credits} />
          </Item>
          <Button
            style={{
              marginTop: 16,
              justifyContent: "center",
              borderRadius: 22
            }}
            onPress={() => handleRegister()}
          >
            <Text>Register</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
