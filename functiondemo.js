//named function
function doWork(x, y) {
    return (x + y);
}
var result = doWork(10, 45);
console.log(result);
//Anonymous function
var sum = function (x, y) {
    return x + y;
};
console.log(sum(5, 5));
function greeting(msg, name) {
    return msg + ' ' + name;
}
var greetMsg = greeting("Good Afternoon", "Team");
console.log(greetMsg);
//type script supports - option parameters -? specify ? after parameter name
function greeting2(msg, name) {
    return msg + ' ' + name;
}
var greetMsg2 = greeting2("Good Afternoon"); //we are able to call the method without passing 2nd parameter
console.log(greetMsg2);
//type script supports - defualt parameters also . Here default value will be Hello if we dont specify during function call
function greeting4(msg, name) {
    if (name === void 0) { name = "Hello"; }
    return msg + ' ' + name;
}
var greetMsg4 = greeting4("Happy"); //output will be Happy Hello
console.log(greetMsg4);
console.log(greeting4("Happy", "Birthday")); //output will be Happy Birthday
function wish(msg) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log(msg + "---" + names.join(","));
}
wish("Welcome", "Ashok", "Ram", "Raj");
