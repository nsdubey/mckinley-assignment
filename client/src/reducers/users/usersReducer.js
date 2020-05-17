import { createAction, handleActions } from 'redux-actions';
import update from 'immutability-helper';


/*********************************************************************************/
export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailed = createAction('LOGIN_FAILURE');
export const fetchMessagesRequest = createAction("FETCH_MESSAGES_REQUEST");
export const fetchMessagesSuccess = createAction("FETCH_MESSAGES_SUCCESS");
export const fetchMessagesFailure = createAction("FETCH_MESSAGES_FAILURE");

const initialState = {
    users: [],
    error: null
};

export default handleActions({
    [loginRequest]: state => state,
    [loginSuccess]: (state, { payload }) => update(state, {
        users: { $set: payload },
    }),
    [loginFailed]: (state, { payload }) =>
        update(state, {
            error: { $set: payload },

        }),
    [fetchMessagesRequest]: state => state,
    [fetchMessagesSuccess]: (state, { payload }) => update(state, {
        messages: { $set: payload },
    }),
    [fetchMessagesFailure]: (state, { payload }) =>
        update(state, {
            error: { $set: payload },

        })
},
    initialState
);


