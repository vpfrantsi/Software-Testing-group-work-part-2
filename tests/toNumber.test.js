import toNumber from "./COMP.SE.200-2021-2022-1-main/src/toNumber.js"

describe("toNumber tests", () => {
	test('toNumber should return 3.2 on 3.2', () => {
		expect(toNumber(3.2)).toBe(3.2);
	}),
	test('toNumber should return 5e-324 on Number.MIN_VALUE', () => {
		expect(toNumber(5e-324)).toBe(Number.MIN_VALUE);
	}),
	test('toNumber should return Infinity on Infinity', () => {
		expect(toNumber(Infinity)).toBe(Infinity);
	}),
	test('toNumber should return 3.2 on \'3.2\'', () => {
		expect(toNumber('3.2')).toBe(3.2);
	}),
	test('toNumber should return undefined on null', () => {
		expect(toNumber(null)).toBe(0);
	})
});
