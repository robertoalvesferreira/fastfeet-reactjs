import { call, takeLatest, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    console.tron.log('antes da chamada');
    const response = yield call(api.post, 'sessions', { email, password });
    console.tron.log(response);
    const { token } = response.data;
    yield put(signInSuccess(token));
  } catch (err) {
    yield put(signInFailure());
    toast.error('Falha na autenticação');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
