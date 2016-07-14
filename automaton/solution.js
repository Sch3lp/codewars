module.exports = () => {

function Automaton() {
   this.states = [];
}

Automaton.prototype.readCommands = function(commands) {
  // Return true if we end in our accept state, false otherwise.
}

let States = (function() {
	
	let StateProto = function(){
		return {
			transition: function(letter) {
				return n;
			}
		}
	}

	function BeginStatePrototype() {

	}

	return {
		Q1: new BeginStatePrototype(),
		Q2: new AcceptStatePrototype(),
		Q3: new WrongStatePrototype()
	}
})();

var myAutomaton = new Automaton();

// Do anything necessary to set up your automaton's states, q1, q2, and q3.
};

