import { takeLatest, all } from 'redux-saga/effects';
import { commonActions } from './common.slice';

export function* onLoad(action) {}

export function* commonRootSaga() {
  yield all([takeLatest(commonActions.load, onLoad)]);
}
