import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import Background from '~/Components/Background';
import logo from '~/assets/logo.png';
import { signUpRequest } from '~/store/modules/auth/actions';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo:"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={setName}
            value={name}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu E-mail:"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setEmail}
            value={email}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha secreta:"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            onChangeText={setPassword}
            value={password}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar conta
          </SubmitButton>
        </Form>
        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já possuo conta!</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
