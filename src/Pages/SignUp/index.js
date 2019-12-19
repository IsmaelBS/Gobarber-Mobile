import React from 'react';
import { Image } from 'react-native';
import Background from '~/Components/Background';
import logo from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
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
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu E-mail:"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite seu E-mail:"
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
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
