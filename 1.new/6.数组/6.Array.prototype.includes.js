/**
 * Created by crystal on 4/29/16.
 */
//Array.prototype.includes(searchString,position):


let arr = [1, 'a', '1', 23, NaN, Infinity];

let res = arr.indexOf(Infinity);//5
let res1 = arr.indexOf(NaN);//-1
let res2 = arr.includes(Infinity);//true
let res3 = arr.includes(NaN);//true

/*if(res > -1){

}*/


console.log(res, res2);