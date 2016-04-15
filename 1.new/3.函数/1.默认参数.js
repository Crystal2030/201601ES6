/**
 * Created by crystal on 4/15/16.
 */
function add(x, y = 0){//语法糖 y = 0 相当于做了if(typeof y === 'undefined'){y = 0;｝处理
    /*if(!y){
        y = 0;
    }*/
    //y || (y = 0);
   /* if(typeof y === 'undefined'){
        y = 0;
    }*/
    return x + y;
}

let res = add(1);
console.log(res);