import { commonRootSaga } from './common/common.saga';

export function* rootSaga() {
  yield all([fork(commonRootSaga)]);
}
