/**
 * Created by crystal on 4/15/16.
 * 箭头函数：this关键字是函数定义时候决定的
 * 函数运行时候的上下文而不是函数定义时候的上下文
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