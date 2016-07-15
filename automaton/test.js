let expect = require('chai').expect;
let {Automaton, States} = require('./solution');

var myAutomaton = new Automaton();

describe('Q1', () => {
	it('should transition correctly', () => {
		let state = new States.Q1();
		expect(state.transition('1')).to.be.an.instanceof(States.Q2);
		expect(state.transition('0')).to.be.an.instanceof(States.Q1);
	});
});

describe('Q2', () => {
	it('should transition correctly', () => {
		let state = new States.Q2();
		expect(state.transition('1')).to.be.an.instanceof(States.Q2);
		expect(state.transition('0')).to.be.an.instanceof(States.Q3);
	});
});

describe('Q3', () => {
	it('should transition correctly', () => {
		let state = new States.Q3();
		expect(state.transition('1')).to.be.an.instanceof(States.Q2);
		expect(state.transition('0')).to.be.an.instanceof(States.Q2);
	});
});

describe('isValidDialect', () => {
	it('non strings are not valid', () => {
		expect(myAutomaton.isValidDialect([1])).to.be.false;
		expect(myAutomaton.isValidDialect(['1',1])).to.be.false;
	});

	it('unknown strings are not valid', () => {
		expect(myAutomaton.isValidDialect(['2'])).to.be.false;
		expect(myAutomaton.isValidDialect(['1','2'])).to.be.false;
	});

	it('only strings 0 and 1 are valid', () => {
		expect(myAutomaton.isValidDialect(['0'])).to.be.true;
		expect(myAutomaton.isValidDialect(['1'])).to.be.true;
		expect(myAutomaton.isValidDialect(['0', '1'])).to.be.true;
		expect(myAutomaton.isValidDialect(['1', '0', '0', '1'])).to.be.true;
	});
});

describe('transition', () => {
	it('can result in Q1', () => {
		expect(myAutomaton.transition(['0'])).to.be.an.instanceof(States.Q1);
		expect(myAutomaton.transition(['0','0','0'])).to.be.an.instanceof(States.Q1);
	});

	it('can result in Q2', () => {
		expect(myAutomaton.transition(['1'])).to.be.an.instanceof(States.Q2);
		expect(myAutomaton.transition(['1','1'])).to.be.an.instanceof(States.Q2);
		expect(myAutomaton.transition(['1','0', '0', '1'])).to.be.an.instanceof(States.Q2);
	});

	it('can result in Q3', () => {
		expect(myAutomaton.transition(['1','0'])).to.be.an.instanceof(States.Q3);
		expect(myAutomaton.transition(['1','0', '0', '1', '0'])).to.be.an.instanceof(States.Q3);
	});
});

describe('readCommands', () => {
	it('can result in Q1', () => {
		expect(myAutomaton.readCommands(['0'])).to.be.false;
		expect(myAutomaton.readCommands(['0','0','0'])).is.false;
	});

	it('can result in Q2', () => {
		expect(myAutomaton.readCommands(['1'])).to.be.true;
		expect(myAutomaton.readCommands(['1','1'])).to.be.true;
		expect(myAutomaton.readCommands(['1','0', '0', '1'])).to.be.true;
	});

	it('can result in Q3', () => {
		expect(myAutomaton.readCommands(['1','0'])).to.be.false;
		expect(myAutomaton.readCommands(['1','0', '0', '1', '0'])).to.be.false;
	});
});

