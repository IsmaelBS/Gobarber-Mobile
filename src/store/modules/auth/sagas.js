import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/Services/api';
// import history from '~/Services/history';
import { signInSuccess, signFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro de usuário',
        'O usuário não pode ser um prestador de serviços'
      );
      return;
    }

    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    // history.push('/dashboard');
  } catch (e) {
    yield put(signFailure());
    Alert.alert(
      'Usuário e/ou senha incorretos!',
      'Usuário e/ou senha incorretos!'
    );
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/user', {
      name,
      email,
      password,
    });

    // history.push('/dashboard');
  } catch (e) {
    console.tron.log(e);
    Alert.alert(
      'Algo deu errado! Verifique os seus dado!',
      'Algo deu errado! Verifique os seus dado!'
    );
  }
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGNOUT_REQUEST', signOut),
]);
