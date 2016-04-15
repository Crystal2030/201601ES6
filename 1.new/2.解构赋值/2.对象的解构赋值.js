/**
 * Created by crystal on 4/15/16.
 * 解构赋值： 变量的批量赋值
 * 把右侧的 数据类型 赋值到 左侧 构造的 相似的 数据类型中
 */
'use strict';

let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
    arr: [1,2,3]
};

let {a, b, c} = obj;
let {a: mya, b: myb, c: myc, arr: [ , , x]} = obj;
//let x1 = obj.arr[2];

console.log(a, b, c);
console.log(mya, myb, myc, x);

