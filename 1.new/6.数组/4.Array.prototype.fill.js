/**
 * Created by crystal on 4/29/16.
 */
//Array.prototype.fill:
// target: 被覆盖的下标，
// start：截取的开始下标
//end：截取结束的下标的后一个
//Array.prototype.fill(target, start = 0, end = this.length);

let arr = [1, 2, 3, 4, 5];

arr.fill('a', 2, 4);

console.log(arr);