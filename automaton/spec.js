Test.assertEquals(new Q1().transition(1), new Q2());
Test.assertEquals(new Q1().transition(0), new Q1());

Test.assertEquals(new Q2().transition(1), new Q2());
Test.assertEquals(new Q2().transition(0), new Q3());

Test.assertEquals(new Q3().transition(1), new Q2());
Test.assertEquals(new Q3().transition(0), new Q2());

Test.assertEquals(myAutomaton.readCommands(["1"]), true);
Test.assertEquals(myAutomaton.readCommands(["1", "0", "0", "1"]), true);
Test.assertEquals(myAutomaton.readCommands(["1", "0", "0", "1", "0"]), false);