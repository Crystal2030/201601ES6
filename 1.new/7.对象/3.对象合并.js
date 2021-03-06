/**
 * Created by crystal on 4/29/16.
 */
'use strict';
// Object.assign
let obj1 = {x: 'x'};
let obj2 = {y: 'y'};
let obj3 = {x: 'x2'};

let obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj1, obj2, obj3, obj4, obj1 === obj4);

// 这属于一个特殊情况
let info = {
    age: 23
};
let me = Object({name: "Weil"}, info);
console.log(me);

function Util () {
    this.hehe = 'heh';
}

Object.assign(Util.prototype, {
    getTime() {
        console.log(new Date, this, '---');
    }
});

//    Util.prototype = {
//        getTime() {
//            console.log(new Date);
//        }
//    };

let u = new Util;
console.log(u.constructor);
u.getTime();


// 克隆对象
let arr = [1, 2, 3];
let o1 = {a: 'a', b: 'b', arr};
function clone (obj) {
    return Object.assign({}, obj);
}
let resO = clone(o1);
o1.arr[0] = 100;
console.log(o1, resO, o1 === resO);