/* jshint undef: true, unused: false, esnext: true, strict:false */
/* globals module */

module.exports = (() => {

function Automaton() {
	this.transitions = [
			new Transition(['Q1', '0', 'Q1']),
			new Transition(['Q1', '1', 'Q2']),
			new Transition(['Q2', '0', 'Q3']),
			new Transition(['Q2', '1', 'Q2']),
			new Transition(['Q3', '0', 'Q2']),
			new Transition(['Q3', '1', 'Q2'])
		];
}

Automaton.prototype.readCommands = function(commands) {
	let currentState = 'Q1';
	commands.forEach((command) => {
		currentState = this.transitions.filter((transition) => {
			return transition.matches(currentState, command);
		})[0].do();
	});

	return this.isValid(currentState);
};

Automaton.prototype.isValid = function(endState) {
	return endState === 'Q2';
};

function Transition(rule) {
	let [from, when, to] = rule; 

	return {
		matches: function(begin, command) {
			return from === begin && when === command;
		},
		do: function() {
			return to;
		}
	};
}

return { Automaton, Transition };
// Do anything necessary to set up your automaton's states, q1, q2, and q3.

})();

