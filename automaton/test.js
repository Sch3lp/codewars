let assert = require('chai').assert;
require('app');


describe('Q1', () => {
	it('should transition correctly', () => {
		assert.equal(new Q2(), new Q1().transition(1));
		assert.equal(new Q1(), new Q1().transition(0));
	});
});

describe('Q2', () => {
	it('should transition correctly', () => {
		assert.equal(new Q2(), new Q2().transition(1));
		assert.equal(new Q3(), new Q2().transition(0));
	});
});

describe('Q3', () => {
	it('should transition correctly', () => {
		assert.equal(new Q2(), new Q3().transition(1));
		assert.equal(new Q2(), new Q3().transition(0));
	});
});

describe('myAutomaton', () => {
	it('should transition correctly', () => {
		assert.equal(true, (["1"]));
		assert.equal(true, (["1", "0", "0", "1"]));
		assert.equal(false, (["1", "0", "0", "1", "0"]));
	});
});