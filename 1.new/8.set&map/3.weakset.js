/**
 * Created by crystal on 4/29/16.
 */


'use strict';
//    let weak = new WeakSet([[1], {}, function () {}]);
//    console.log(weak);

let obj1 = {a: 'a'};
let obj2 = {b: 'b'};
let weak = new WeakSet([obj1, obj2]);
obj1 = {c: 'c'};
obj2.b = 'bbb';
console.log(weak);
setTimeout(() => {
    console.log(weak);
}, 500);

// 防止内存泄漏 size 和 forEach 都是没有的
// 不可遍历

// 方法
// add
// delete
// has