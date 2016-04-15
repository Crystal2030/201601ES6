/**
 * Created by crystal on 4/15/16.
 * 箭头函数：this只跟定义函数决定的，es5里面的this是跟运行环境有关
 */
function func(){
   /* setTimeout(function(){
        debugger;
        console.log(this.id);
    })*/
    setTimeout(() => {
        console.log(this.id);
    })
}

/*
let obj = {
    id : 123
}

func.call(obj);*/

let obj = {
    id: 123,
    func1: function(){
        setTimeout(function(){
            console.log(this.id);
        })
    },
    func2: function(){
        setTimeout(() => {
            console.log(this.id);
        })
    },
    func3: () => {
        //this 是定义函数的环境， window
        setTimeout(function(){
            console.log(this.id);
        })
    }
};

obj.func1();
obj.func2();
obj.func3();