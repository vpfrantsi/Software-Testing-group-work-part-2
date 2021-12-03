import filter from "./COMP.SE.200-2021-2022-1-main/src/filter.js"

describe("filter tests", () => {
	test('filter should return objects for specified predicates, active in this case', () => {
		const users = [
			{ 'user': 'barney', 'active': true },
			{ 'user': 'fred',   'active': false }
		];
		expect(filter(users, ({ active }) => active)).toStrictEqual([{'user': 'barney', 'active': true }]);
	}),
	test('filter should return empty array when no objects fit the filter', () => {
		const users2 = [
			{ 'user': 'barney', 'active': false },
			{ 'user': 'fred',   'active': false }
		];
		expect(filter(users2, ({ active }) => active)).toStrictEqual([[]]);
	})
});
