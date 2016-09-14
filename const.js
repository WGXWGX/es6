

const A = {a:23,b:34};

Object.freeze();

A.a = 33;

console.log(A);
