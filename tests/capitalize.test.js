
import capitalize from "./COMP.SE.200-2021-2022-1-main/src/capitalize.js"


/* this gives an error of TypeError: capitalize is not a function, should fix
const capitalize = require('./COMP.SE.200-2021-2022-1-main/src/capitalize'); */

describe("capitalize tests", () => {
	test('capitalize should return Fred when given FRED', () => {
		expect(capitalize('FRED')).toBe('Fred');
	})
});
