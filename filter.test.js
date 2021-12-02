import filter from "./COMP.SE.200-2021-2022-1-main/src/filter.js"

describe("filter tests", () => {
	test('filter should return objects for specified predicates, active in this case', () => {
		const users = [
			{ 'user': 'barney', 'active': true },
			{ 'user': 'fred',   'active': false }
		];
		expect(filter(users, ({ active }) => active)).toStrictEqual(['barney']);
	})
});
