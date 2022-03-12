import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
