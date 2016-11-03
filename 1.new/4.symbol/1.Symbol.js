/*let ele = document.querySelector('#li');

ele.x = 123;
ele.y = 234;*/
"use strict"
//let syb = Symbol('sub');
//let syb2 = Symbol('sub');
//console.log(syb, syb2, syb === syb2, typeof syb, syb.toString() === syb2.toString());

let sybx = Symbol('subx');
let syby = Symbol('suby');

let ele = {};

ele[sybx] = 123;
ele[syby] = 234;
console.log(ele);