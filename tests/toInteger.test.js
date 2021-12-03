/*const toIntegerTest = require('./COMP.SE.200-2021-2022-1-main/src/toInteger');*/

import toInteger from "./COMP.SE.200-2021-2022-1-main/src/toInteger.js"

describe("toInteger tests", () => {
	test('toInteger should return 3 on 3.2', () => {
		expect(toInteger(3.2)).toBe(3);
	}),
	test('toInteger should return 0 on MIN_VALUE', () => {
		expect(toInteger(Number.MIN_VALUE)).toBe(0);
	}),
	test('toInteger should return 1.7976931348623157e+308 on infinity', () => {
		expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
	}),
	test('toInteger should return 3 on \'3.2\'', () => {
		expect(toInteger('3.2')).toBe(3);
	})
});
