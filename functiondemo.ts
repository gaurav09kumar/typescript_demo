    //named function
    function doWork(x:number , y:number) : number{
        return (x+y);
    }

    let result = doWork(10,45);
    console.log(result);

    //Anonymous function
    let sum = function(x:number, y:number) : number {
        return x+y;
    }

    console.log(sum(5,5));

    
    function greeting(msg:string, name:string) : string {
        return msg + ' ' + name;
    }

    let greetMsg = greeting("Good Afternoon" , "Team");
    console.log(greetMsg);

    //type script supports - option parameters -? specify ? after parameter name
    function greeting2(msg:string, name?:string) : string {
        return msg + ' ' + name;
    }

    let greetMsg2 = greeting2("Good Afternoon"); //we are able to call the method without passing 2nd parameter
    console.log(greetMsg2);

    //type script supports - defualt parameters also . Here default value will be Hello if we dont specify during function call
    function greeting4(msg:string, name:string="Hello") : string {
        return msg + ' ' + name;
    }

    let greetMsg4 = greeting4("Happy"); //output will be Happy Hello
    console.log(greetMsg4);
    console.log(greeting4("Happy","Birthday")); //output will be Happy Birthday

    function wish(msg:string, ...names:string[]){
        console.log(msg + "---" + names.join(","));
    }

    wish("Welcome","Ashok","Ram","Raj");