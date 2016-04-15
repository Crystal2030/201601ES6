/**
 * Created by crystal on 4/15/16.
 * 箭头函数
 */
let func = function (a) {
    return a + 1;
}

let func2 = (a) => {
    return a + 1;
};

let func3 = (a) => a+1;//没有花括号，a+1 就是返回值

let res1 = func(1);
let res2 = func2(2);
let res3 = func3(3);

console.log(res1, res2, res3);

let arr = [1, 3, 5, 7];

let r = arr.map(function(item, index, arr){
    return item * item;
});

//let r1 = arr.map((item, index, arr) => item*item);
let r1 = arr.map(item => item*item);

console.log('----square----',r);
console.log('----square----',r1);