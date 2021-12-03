import memoize from "./COMP.SE.200-2021-2022-1-main/src/memoize.js"
const obj = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };
const valuestest = memoize(Object.values);
describe("memoize tests", () => {
	test('memoize should return correct values using memoized function values: [1,2]', () => {
		expect(valuestest(obj)).toStrictEqual([1, 2]);
	}),
	test('memoize should return values of other: [3,4] ', () => {
		expect(valuestest(other)).toStrictEqual([3,4]);
	}),
	obj.a = 2;
	test('memoize should return values of object unchanged: [1,2]', () => {
		expect(valuestest(obj)).toStrictEqual([1,2]);
	}),
	valuestest.cache.set(obj, ['a', 'b'])
	test('memoize should return changed values of object: [a, b]', () => {
		expect(valuestest[obj]).toStrictEqual(['a', 'b']);
	})
});

