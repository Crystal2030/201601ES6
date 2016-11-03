/**
 * Created by crystal on 4/29/16.
 */
//Array.prototype.keys:


let arr = [1, 'a', '1', 23, NaN, Infinity];

let arrKeys = arr.keys();
let arrEntries = arr.entries();

console.log(arrKeys);

for (let item of arrKeys) {
    console.log(item);
}

for (let item of arrEntries) {
    console.log(item);
}