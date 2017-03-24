import { fetchData } from '../index';

test('sum will throw error', () => {
  const val = 1000;
  return expect(fetchData(val)).resolves.toBe(val);
});
