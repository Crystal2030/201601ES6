/**
 * Created by crystal on 4/29/16.
 */
let a = '1123';
let b = '33412';
let c = [1, 3];

let para = 'bcc';

let obj = {
    a,
    b,
    c,
    add: function(){
        return 'add';
    }
};
let obj2 = {
    add(){
        return 123;
    }
};


function func () {
    return {a, b, c};
}

console.log(obj);
console.log(func());