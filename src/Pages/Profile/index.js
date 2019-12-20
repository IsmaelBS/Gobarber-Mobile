import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/Components/Background';

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} size={20} name="person" />
  ),
};
