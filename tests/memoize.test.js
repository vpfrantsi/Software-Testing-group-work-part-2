import memoize from "./COMP.SE.200-2021-2022-1-main/src/memoize.js"
let object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };
const values = memoize(values);
describe("memoize tests", () => {
	test('memoize should return correct values of memoized object: [1,2]', () => {
		expect(values(object)).toBe([1,2]);
	}),
	test('memoize should return values of other: [3,4] ', () => {
		expect(values(other)).toBe([3,4]);
	}),
	object.a = 2;
	test('memoize should return values of object unchanged: [1,2]', () => {
		expect(values(object)).toBe([1.2]);
	}),
	values.cache.set(object, ['a', 'b'])
	test('memoize should return changed values of object: [a, b]', () => {
		expect(values[object]).toBe(['a', 'b']);
	})
});

