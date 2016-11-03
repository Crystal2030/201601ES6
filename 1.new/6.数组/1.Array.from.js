/**
 * Created by crystal on 4/29/16.
 */
//Array from: 把类数组转化成数组, 同时也可以复制数组
//复制有 深拷贝和 浅拷贝
//浅拷贝： 改变引用类型会受影响， 改变基本类型是不会受影响的
//深拷贝：
let obj = {
    a: 'a',
    b: 'b'
}
let arr = [1, 2, 3, obj];
//let arr2 = arr.slice(0);

let arr2 = Array.from(arr);
obj.c = 'c';
arr[0] = 111;

//console.log(arr, arr2);

let bodyDom = document.querySelector('body');
let bodyArr = Array.from(bodyDom || []);