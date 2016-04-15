/**
 * Created by crystal on 4/15/16.
 */
function add(a, ...arg){
    //debugger;
    let res = 0;
    //优化后的for循环
    for(let i = arg.length-1; i >=0; i--){
        res += i;
    }
    /*for(let i = 0, len = arg.length ; i < len; i++){
        res += i;
    }*/
    return res;
}

let res = add(1, 3, 4, 5);

console.log(res);

//求最大值
let arr = [3, 46, 23, 91];
//let m = Math.max.apply(null, arr);
let m = Math.max(...arr);//拓展运算符代替apply求最大值
console.log('------m-----', m)