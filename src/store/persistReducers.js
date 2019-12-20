import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['user', 'auth'],
    },
    reducers
  );

  return persistedReducers;
};
