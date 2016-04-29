/**
 * Created by crystal on 4/29/16.
 */
//Array.prototype.findIndex:


let arr = [1, 'a', '1', 23];

let res = arr.find((item, index, array) => {
    return item == 'a';
});

let res2 = arr.findIndex((item, index, array) => {
    return item === '2';
});

console.log(res, typeof res);
console.log(res2, typeof res2);