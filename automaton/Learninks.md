`for..of..` is more readable than `.forEach()`

Making `State` responsible for transitions causes a lot of object construction.

Whereas making `Transition`s more explicit makes for more tedious, yet more explicit and readable set-up. But causes more iteration.

Destructuring is neat!

`let [from, when, to] = rule;`

`let {Automaton, Transition} = require('./solution2');`
