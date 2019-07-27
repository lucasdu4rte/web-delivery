import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from 'api';
import history from 'services/history';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (user.type !== 'admin') {
    console.tron.error('Usuário não é Admin');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/pedidos');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
