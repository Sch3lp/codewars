let expect = require('chai').expect;
let solution = require('./app');


describe('Q1', () => {
	it('should transition correctly', () => {
		expect(new Q2()).to.equal(new Q1().transition(1));
		expect(new Q1()).to.equal(new Q1().transition(0));
	});
});

describe('Q2', () => {
	it('should transition correctly', () => {
		expect(new Q2()).to.equal(new Q2().transition(1));
		expect(new Q3()).to.equal(new Q2().transition(0));
	});
});

describe('Q3', () => {
	it('should transition correctly', () => {
		expect(new Q2()).to.equal(new Q3().transition(1));
		expect(new Q2()).to.equal(new Q3().transition(0));
	});
});

describe('myAutomaton', () => {
	it('should transition correctly', () => {
		
	});
});