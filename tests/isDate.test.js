import isDate from "./COMP.SE.200-2021-2022-1-main/src/isDate.js"

describe("isDate tests", () => {
	test('isDate should return true when given a new Date object', () => {
		expect(isDate(new Date)).toBe(true);
	}),
	test('isDate should return false when given a date in string form', () => {
		expect(isDate('Mon April 23 2012')).toBe(false);
	})
});
