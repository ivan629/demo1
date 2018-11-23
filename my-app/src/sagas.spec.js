import test from 'tape';
import { put } from 'redux-saga/effects';
import { seeStore } from './sagas/historySaga';

test('incrementAsync Saga test', (assert) => {
  const gen = seeStore();

  assert.deepEqual(
    gen.next().value,
    put({ type: 'SEE_HISTORY' }),
    'seeStoreAsync Saga must dispatch an SEE_HISTORY action'
  );

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'seeStoreAsync Saga must be done'
  );

  assert.end();
});
