
// function User(name){
// 	this.name = name
// }

// User.prototype.sayName = function(){
// 	console.log(this.name);
// }

// function Son(){

// }

// Son.prototype = new User("ls");


// var s = new Son();
// s.sayName();

// var u = new User("zs");
// u.sayName();
var u = new User('zs');



class User{

	constructor(name){
		this.names = name;
	}

	sayName(){
		console.log(this.names);
	}

	static sayAge(age){
		console.log(age);
	}

}

class Son extends User{
	constructor(name){
		super(name);
	}

}
//var u = new User('zs');
//User.sayAge(32);













