/**
 * Created by crystal on 4/29/16.
 */
'use strict';
// Set 的参数接受一个数组
// 讲述不能重复的数值是一个什么情况


// Set 实现js中的集合运算
// 集合运算有三种 并集 交集 差集
let s1 = new Set([1, 3, 5, 7]);
let s2 = new Set([1, 4, 5, 8]);
//并集
let arr = [...s1,...s2];//[1, 3, 5, 7, 1, 4, 5, 8]
let sb = new Set([...s1,...s2]);{1, 3, 5, 7, 4,8}
console.log(arr, sb);

//交集
//let arr2 = Array.from(s1); // 变成数组的方法1
//[...s1]// 变成数组的方法2
let sss = [...s1].filter((item) => s2.has(item));
let sj = new Set(sss);
console.log(sj);

//差集:我有你没有
let cj = new Set([...s1].filter((item) => !s2.has(item)));
let cj2 = new Set([...s2].filter((item) => !s1.has(item)));
console.log(cj, cj2);
