/**
 * Created by ziwen.xu on 2016/4/16.
 * 默认值不写报错
 */
'use strict'
/*
 //function ajax ({method = 'get', url = 'default_url'}) {
function ajax ({method = 'get', url = 'default_url'} = {}) {
	//params.type = params.type || 'get';
	//params.url = params.url || 'default_url';
	console.log(method, url);
}*/

function ajax2 ({method = 'post', url = 'default_url'} = {method : 'post', url : 'default_url'} ) {
	console.log(method, url);
}

//ajax();
ajax2({
	method = 'get'
});