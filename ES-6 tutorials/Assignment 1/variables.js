 /*
    what is hoisting
    Hoisting is JS's default behavior of defining all the declarations at the top of the scope before code execution. 
    One of the benefits of hoisting is that it enables us to call functions before they appear in the code. 
    JavaScript only hoists declarations, not initializations.



/* difference between var , let and  const */


/* var usages and disadvantages:

1. var declarations are globally scoped or function/locally scoped.
2. var variables can be updated and re-declared within its scope.
3. var can be declared without being initialized

*/

//var is function scoped when it is declared within a function. 
//This means that it is available and can be accessed only within that function.

var tester = "hey hi";
    
function newFunction() {
    var hello = "hello";
}
//console.log(hello); // error: hello is not defined

//var variables can be re-declared and updated
var greeter = "hey hi";
var greeter = "say Hello instead";
console.log(greeter);

//disadvantage of var in the below example 
/* the variable "person_name" is declared and now assigned to new vlaue "raj", if you know about redeclaration  then it is ok,but
what if if you are accessing the same varibale in another function and  expecting name to be "kesav" since you have
declared it gloablly with  vlaue "kesav". this creates a lot bugs in the app.
*/
var person_name="kesav";
var count=8;
if (count>7){
    person_name="raj";
}

console.log(person_name);


/*let usages and advantages:

1.let is  block scoped.its life lies and dies witin the scope.
2.let variables can be updated but not re-declared,you re-declared in diffrernt scope
3.let can be declared without being initialized
*/
let product_name="IBM";
let times=8;
if (times>7){
    let new_name="apple";
    console.log(new_name)
}

//console.log(new_name);  //new_name not defined 

//let can be updated but not re-declared
let supplier_name = "airtel";
supplier_name = "JIO";
console.log(supplier_name) //this works

// this will not work
//let supplier_name = "airtel";
//let supplier_name = "JIO";



//let variables can be updated but not re-declared,you re-declared in diffrernt scope

let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"

/* the above code will not cause error since the declarations are in diffrent scope.and the gloablly 
assgined vlaue remains the same and not changed.*/



/*const usages and advantages:

1.Const is block scoped.(same as let example)
2.const variables can neither be updated nor re-declared.
3.const must be initialized during declaration.*/

//Const is block scoped.(same as let example)
const greeting1 = "say Hi";
if (true) {
    const greeting1 = "say Hello instead";
    console.log(greeting1); // "say Hello instead"
}
console.log(greeting1); // "say Hi"

//const variables can neither be updated nor re-declared.

const greeting2 = "say Hi";
greeting2 = "say Hello instead";// error: Assignment to constant variable.

const greeting4 = "say Hi";
const greeting4 = "say Hello instead";// error: Identifier 'greeting' has already been declared


//a const object cannot be updated, the properties of this objects

    const ibmoutput={
        name:"kesav",
        age:38
    }
    ibmoutput.name="raj"
    ibmoutput.address="Newjersey"

    console.log(ibmoutput)

    //the bewlo code givens error
    ibmoutput={name1:"ram"}

   