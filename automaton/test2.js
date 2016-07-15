let expect = require('chai').expect;
let {Automaton, Transition} = require('./solution2');

var myAutomaton = new Automaton();


describe('readCommands', () => {
	it('can result in Q1', () => {
		expect(myAutomaton.readCommands(['0'])).to.be.false;
		expect(myAutomaton.readCommands(['0','0','0'])).is.false;
	});

	it('can result in Q2', () => {
		expect(myAutomaton.readCommands(['1'])).to.be.true;
		expect(myAutomaton.readCommands(['1','1'])).to.be.true;
		expect(myAutomaton.readCommands(['1','0','0', '1'])).to.be.true;
	});

	it('can result in Q3', () => {
		expect(myAutomaton.readCommands(['1','0'])).to.be.false;
		expect(myAutomaton.readCommands(['1','0','0', '1', '0'])).to.be.false;
	});
});

