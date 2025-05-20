const reverseString = require('../src/stringUtils').reverseString;
const isPalindrome = require('../src/stringUtils').isPalindrome;
const truncateString = require('../src/stringUtils').truncateString;
const countCharacters = require('../src/stringUtils').countCharacters;

test('reverseString: pippo is equal to oppip', () => {
  expect(reverseString("pippo")).toBe("oppip");
});

test('isPalindrome: anna is equal to true', () => {
  expect(isPalindrome("anna")).toBe(true);
});

test('isPalindrome: ANNa is equal to true', () => {
  expect(isPalindrome("ANNa")).toBe(true);
});

test('isPalindrome: pippo is equal to false', () => {
  expect(isPalindrome("pippo")).toBe(false);
});

test('isPalindrome: piPPo is equal to false', () => {
  expect(isPalindrome("piPPo")).toBe(false);
});

test('truncateString: TuttiPerUnoEUnoPerTutti with maxLenght = 4 is equal to Tutt...', () => {
  expect(truncateString("TuttiPerUnoEUnoPerTutti", 4)).toBe("Tutt...");
});

test('truncateString: CIAO with maxLenght = 10 is equal to CIAO', () => {
  expect(truncateString("CIAO", 20)).toBe("CIAO");
});

test('countCharacters: ciao is equal to {c: 1, i: 1, a: 1, o: 1}', () => {
  expect(countCharacters("ciao")).toEqual({ c: 1, i: 1, a: 1, o: 1 });
});

