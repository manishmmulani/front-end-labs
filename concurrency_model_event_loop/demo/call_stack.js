function three() {
    console.log("three");
}

function two() {
    console.log("two");
    three();
    console.log("four");
}

function one() {
    console.log("one");
    two();
    console.log("five");
}

one();

// call stack tells you where you are in the program

function foo() {
  foo();
}
foo();

// chrome would through stack size exceeded after limit of 16000