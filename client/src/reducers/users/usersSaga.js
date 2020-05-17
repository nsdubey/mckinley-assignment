import axios from 'axios';

import { put, all, takeEvery } from 'redux-saga/effects';


import {
    loginRequest,
    loginSuccess,
    loginFailed,
    fetchMessagesRequest,
    fetchMessagesSuccess,
    fetchMessagesFailure

} from './usersReducer';

/**********************/
function* loginWorker({ payload }) {
    const { loginData, callback } = payload;
    console.log("Login data is..........", loginData)
    try {
        const url = `http://localhost:4000/api/login`
        const { data } = yield axios.post(url, loginData);
        if (callback) callback(null, data.results);
        yield put(loginSuccess(data.results));
    } catch (err) {
        if (callback) callback(err.message, null);
        yield put(loginFailed(err));
    }
}


function* fetchMessagesWorker({payload}) {
    const { loginData, callback } = payload;
    console.log("Login data is..........", loginData)
    try {
        const url = `http://localhost:4000/api/messages`
        const { data } = yield axios.post(url, loginData);
        if (callback) callback(null, data.results);
        yield put(fetchMessagesSuccess(data.results));
    } catch (err) {
        if (callback) callback(err.message, null);
        yield put(fetchMessagesFailure(err));
    }
}

export function* usersSaga() {
    yield all([
        takeEvery(loginRequest, loginWorker),
        takeEvery(fetchMessagesRequest, fetchMessagesWorker)
    ]);
}
