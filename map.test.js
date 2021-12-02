import map from "./COMP.SE.200-2021-2022-1-main/src/map.js"

describe("map tests", () => {
	function sq(n) {return n*n}
	test('map should return square ([16,64]) of [4,8]', () => {
		expect(map([4,8], sq)).toStrictEqual([16,64]);
	})
});
