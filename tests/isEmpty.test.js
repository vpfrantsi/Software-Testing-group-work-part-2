

/* does not work for some reason, googling didn't really help
const isEmpty = require('./COMP.SE.200-2021-2022-1-main/src/isEmpty');*/

import isEmpty from "./COMP.SE.200-2021-2022-1-main/src/isEmpty.js"

describe("isEmpty tests", () => {
	test('isEmpty should return true on null', () => {
		expect(isEmpty(null)).toBe(true);
	}),
	test('isEmpty should return true on true', () => {
		expect(isEmpty(true)).toBe(true);
	}),
	test('isEmpty should return true on empty objects', () => {
		expect(isEmpty({})).toBe(true);
	}),
	test('isEmpty should return false on non-empty arrays', () => {
		expect(isEmpty([1,2,3])).toBe(false);
	}),
	test('isEmpty should return false on non-empty strings', () => {
		expect(isEmpty('abc')).toBe(false);
	}),
	test('isEmpty should return false on objects with properties', () => {
		expect(isEmpty({'a':1})).toBe(false);
	})
});