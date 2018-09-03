const greet = require('../lib/greet.js');

test('should return Hello adam', () => {
  expect(greet.sayHello('adam')).toBe('Hello adam');
});

test('should return null with no args', () => {
  expect(greet.sayHello()).toBeNull();
});
