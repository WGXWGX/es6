
// function fn1(callback){
// 	setTimeout(function(){
// 		console.log(1);
// 		callback();
// 	},100);
	
// }

// function fn2(callback){
// 	setTimeout(function(){
// 		console.log(2);
// 		callback();
// 	},50);
// }

// function fn3(callback){
// 	setTimeout(function(){
// 		console.log(3);
// 		callback();
// 	},300);
// }


// fn1(function(){
// 	fn2(function(){
// 		fn3(function(){

// 		});
// 	});
// });

// var p = new Promise(function(resolve,reject){
// 	fn1(function(){
// 		reject();
// 	});

// });

// p.then(function(){
// 		fn2(function(){
// 			return Promise.resolve();
// 		});
		
// 	})
// .then(function(){
// 	fn3(function(){
// 		return Promise.resolve();
// 	});
// }).catch(function(){
// 	console.log("err");
// });
var aa = Promise.race([new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(1);
	},100);

}),new Promise(function(resolve,reject){
	setTimeout(function(){
		reject(2);
	},50);

}),new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve(3);
	},300);

})]);

aa.then(function(data){
	console.log(data);
},function(data){
	console.log(data+"dddddd");
});

















