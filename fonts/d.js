"use strict";
let c = new Promise((resolve,reject)=>{
	resolve("123");
})
c.then(num=>{
	console.log(num);
	return 'a';
})
.then(num=>{
	console.log(num);
})

// let {log} = console;
