import { put, take } from 'redux-saga/effects';
import {
    CLEAR_HISTORY,
    SEE_HISTORY,
    BEFORE_SEE_HISTORY,
    BEFORE_CLEAR_HISTORY
} from '../constants/Game';

export function* seeStore() {
    while (true) {
        const { payload } = yield take(BEFORE_SEE_HISTORY);

        yield put({
            type: SEE_HISTORY,
            payload
        });
    }
}

export function* clearHistory() {
        const { payload } = yield take(BEFORE_CLEAR_HISTORY);

        yield put({
            type: CLEAR_HISTORY,
            payload
        });
}
