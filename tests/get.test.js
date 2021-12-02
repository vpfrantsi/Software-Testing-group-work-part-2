import get from "./COMP.SE.200-2021-2022-1-main/src/get.js"

const object = { 'a': [{ 'b': { 'c': 3 } }] }

describe("get tests", () => {
	test('get should return 3', () => {
		expect(get(object, 'a[0].b.c')).toBe(3);
	}),
	test('get should return 3', () => {
		expect(get(object, ['a','0','b','c'])).toBe(3);
	}),
	test('get should return default on undefined object path', () => {
		expect(get(object, 'a.b.c', 'default')).toBe('default');
	})
});
