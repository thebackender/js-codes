function hello() {
	console.log("Hello", this);	
}
const person = {
	name: 'Naruto',
	age: '12',
	sayHello: hello, // Call function hello()
	sayHelloWindow: hello.bind(document),//hello.bind(window)
	logInfo: function(job, phone){
		console.group(`${this.name} info:`);//Open console group
		console.log(`Name is ${this.name}`);/*Object here is person | 
		То есть контекстом здесь является объект person{}*/
		console.log(`Name is ${this.age}`);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);
		console.groupEnd();//Close console group
	}
}
const lena = {
	name: 'Elena',
	age: 19
}
/*const funcLena = person.logInfo.bind(lena);//For call function logInfo() with object const lena
funcLena('actress', '8-99-65-2');*/

/*const funcLena = person.logInfo.bind(lena,'actress', '8-99-65-2');//set parameter to function by bind()
funcLena();*/

//person.logInfo.bind(lena, 'por', '8-200-100')();
//person.logInfo.call(lena, 'caller', '8-2301-784');//without calling ()
person.logInfo.apply(lena, ['worer', '015-20-201']);//call with array()

///======================

const array = [1, 2, 3, 4, 5];
/*function multBy(arr, n){
	return arr.map(function(i){
		return i * n;
	});
}*/
Array.prototype.multBy = function(n){
	//console.log('multBy', this);
	return this.map(function(i){
		return i * n;
	});
}
//array.multBy(2);
console.log(array.multBy(7));//Вместо array можно написан другой массив