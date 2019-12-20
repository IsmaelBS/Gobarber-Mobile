import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/Components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  return <Background />;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon color={tintColor} size={20} name="event" />
  ),
};
