import { call, takeLatest, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    console.tron.log('antes da chamada');
    const response = yield call(api.post, 'sessions', { email, password });

    if (response.data.error) {
      toast.error('Falha na autenticação');
      return;
    }
    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (err) {
    yield put(signInFailure());
    toast.error('Falha na autenticação');
    history.push('/');
  }
}
export function* signUp({ payload }) {
  try {
    const { email, password, name } = payload;
    const response = yield call(api.post, 'users', { name, email, password });
    console.tron.log(response);
    history.push('/');
    toast.success('Cadastrado com sucesso');
  } catch (err) {
    toast.error('Falha no cadastro!');
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
