import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/Services/api';
import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const hasOldPassword = rest.oldPassword ? rest : {};
    const profile = { name, email, avatar_id, hasOldPassword };

    const response = yield call(api.put, 'user', profile);

    Alert.alert('Perfil atualizado', 'Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (e) {
    Alert.alert(
      'Erro ao atualizar perfil',
      'Erro ao atualizar perfil! Confira seus dados!'
    );
    yield put(updateProfileFailure);
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
