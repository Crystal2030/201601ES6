/**
 * Created by crystal on 4/29/16.
 */
'use strict';
// Set 的参数接受一个数组
// 讲述不能重复的数值是一个什么情况


let obj = {a: 'a'};
var s = new Set([1, 'str', obj, obj, NaN, NaN, +0, -0, {}, {}, null, null, undefined, undefined]);
//    s.add(1);

console.log(s, s.size, s.length);//set可以去重，它没有length属性

// 基本操作
// add 添加
// delete 删除
// has 查找
// clear 清空

/*let res = s.add(123);
console.log(s, res);

let resDel = s.delete('str');//返回值是true
console.log('delete', s, resDel);

let resHas = s.has(null);
console.log('has', resHas);//true

s.clear();//没有返回值
console.log('clear', s);*/

// 遍历操作
// keys
// values
// entries
// forEach
/*console.log(s.keys(), s.values(), s.entries(), s.keys() == s.values());
for (let item of s.keys()) {
    console.log(item);
}
console.log('---');
for (let item of s.values()) {
    console.log(item);
}
console.log('---');
for (let item of s.entries()) {
    console.log(item);
}
console.log('---');
for (let item of s) {
    console.log(item);
}*/

// 拓展运算符号 ... 是使用了for of的遍历方式
/*let set = new Set(['a', 'b', 'c', 'a']);
let arr = [...set];
console.log(arr);*/

//数组去重
//1. 把数组放入set里
//2. set会自动去重
//3.把set再放回数组中
let arr = [1, 2, 2, 4, 5, 1, 3];
let set = new Set(arr);

let arr2 = Array.from(set);

console.log(arr, arr2);



