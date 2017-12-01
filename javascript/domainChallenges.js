// Question: What is the value of foo?
var foo = 10 + '20';

// Question: What will be the output of the code below?
console.log(0.1 + 0.2 == 0.3);

// Question: How would you make this work?
add(2, 5); // 7
add(2)(5); // 7

// Question: What value is returned from the following statement?
"i'm a lasagna hog"
  .split('')
  .reverse()
  .join('');

// Question: What is the value of window.foo?
window.foo || (window.foo = 'bar');

// Question: What is the outcome of the two alerts below?
var foo = 'Hello';
(function() {
  var bar = ' World';
  alert(foo + bar);
})();
alert(foo + bar);

// Question: What is the value of foo.length?
var foo = [];
foo.push(1);
foo.push(2);

// Question: What is the value of foo.x?
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

// Question: What does the following code print?
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');

// Question: What is the difference between these four promises?
doSomething().then(function() {
  return doSomethingElse();
});

doSomething().then(function() {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
