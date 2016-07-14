#Why? What's this $%!?
I wanted to use my own IDE to solve [CodeWars](http://www.codewars.com) Kata's.
Admittedly, I know jack shit about VIM and/or EMACS.

I didn't wanna bother installing the [docker container etc.](https://github.com/Codewars/codewars-runner-cli) that CodeWars uses, because it seemed like a lot of overhead, and pretty far from a realistic project setup.

To submit your kata solutions to CodeWars, you might have to strip some stuff in your solution, like `module.exports`. 

To submit your kata solution tests, either just forget about it, or use multiple cursor magic to rewrite into the CodeWars specific Test framework.

#Usage
##Creating a new Kata
```
mkdir new_kata
cd new_kata
npm init
npm install ../parent
```

Modify package.json to look like this:
```
{
  "scripts": {
    "test": "mocha"
  }
}
```

Start coding:
`codewars/new_kata >$  npm test`

##Updating a Kata after you've changed dep's in parent
Let's say the new_kata from above needs changed dependencies we just did in parent.
```
codewars/parent >$  npm update
codewars/parent >$  cd ../new_kata
codewars/new_kata >$  npm rebuild
```
