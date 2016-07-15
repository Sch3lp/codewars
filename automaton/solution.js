/* jshint undef: true, unused: false, esnext: true, strict:false */
/* globals module */

module.exports = (() => {

function Automaton() {
}

Automaton.prototype.isValidDialect = function(commands) {
	return commands.filter((command) => {
		return ['0','1'].includes(command);
	}).length == commands.length;
};

Automaton.prototype.transition = function(commands) {
	let currentState = new States.Q1();
	commands.forEach((command) => {
		currentState = currentState.transition(command);
	});
	return currentState;
};

Automaton.prototype.readCommands = function(commands) {
	return this.isValidDialect(commands) ? this.transition(commands).isAcceptState() : false;
};


let States = (function() {
	function Q1() {}
	function Q2() {}
	function Q3() {}

	Q1.prototype.transition = (command) => command === '1' ? new Q2() : new Q1();
	Q2.prototype.transition = (command) => command === '1' ? new Q2() : new Q3();
	Q3.prototype.transition = (_) => new Q2();
	Q1.prototype.isAcceptState = () => false;
	Q2.prototype.isAcceptState = () => true;
	Q3.prototype.isAcceptState = () => false;

	return { Q1, Q2, Q3 };
})();

return { Automaton, States };
// Do anything necessary to set up your automaton's states, q1, q2, and q3.

})();

