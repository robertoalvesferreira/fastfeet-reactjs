import { call, takeLatest, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessisons', { email, password });
    const { token } = response.data;

    yield put(signInSuccess(token));
  } catch (err) {
    toast.error('Falha na autenticação');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
