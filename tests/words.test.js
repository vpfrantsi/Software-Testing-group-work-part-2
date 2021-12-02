import words from "./COMP.SE.200-2021-2022-1-main/src/words.js"

describe("words tests", () => {
	test('words should return [\'fred\', \'barney\', \'pebbles\'] on fred, barney, & pebbles', () => {
		expect(words('fred, barney, & pebbles')).toStrictEqual(['fred', 'barney', 'pebbles']);
	}),
	test('words should return [\'fred\', \'barney\', \'&\', \'pebbles\'] on \'fred, barney, & pebbles\', /[^, ]+/g', () => {
		expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual(['fred', 'barney', '&', 'pebbles']);
	})
});
