/**
 * Created by crystal on 4/15/16.
 * 解构赋值： 变量的批量赋值
 */
'use strict';

let arr = [1, [2.1, 2.2], 3];//嵌套赋值
let arr2 = [1, ,2, 3, 4]//省略赋值
let arr3 = [1,2,3,4,5];//不定参数
let arr4 = [1,2];//越界问题
//let a = arr[0];
//let b = arr[1];
//let c = arr[2];
let [a, [b1], c] = arr;
let [, [, x]] = arr;

//...拓展运算符, ...other不能放在中间
let [e, ,d, ...other] = arr3;
console.log(e,d,other);//1 3 [4, 5]

console.log(a, b1, c);//1 2.1 3
console.log(x);//2.2

let[o, p, q] = arr4;
console.log(o, p , q);//1 2 undefined