import * as T from './index';

test('test type function', () => {
  expect(T.testTypeFunction(3)).toEqual('b: 5');
})