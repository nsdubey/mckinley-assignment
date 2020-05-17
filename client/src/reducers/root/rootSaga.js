import { all } from 'redux-saga/effects';

import { usersSaga } from '../users/usersSaga';


export function* rootSaga() {
    yield all([usersSaga()]);
}
