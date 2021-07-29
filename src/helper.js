// export

const PORT = 5000;
const FNAME = 'anil';
const LNAME = 'dollor';
const ADDR = 'neemuch';
//obj.property

/*
    module.exports is a javascript object {}

    module.exports = {}

    A Javascript Object {} have 2 Member
    1. Property
    2. Method

    module.exports = {
        property1:value,
        property2:value,
        .
        .
        m:f
        method1:function(){},
        method2:function(){},
        .
        .

    }


*/

const myMethod1 = () => { //Fat arrow ES6
    // your method logic
    console.log('hello from myMethod1');
 }
const myMethod2 = function(){ //Fat arrow
    // your method logic
    console.log('hello from myMethod2');
 }

        module.exports = {
                P:PORT,
                "FN":FNAME,
                'LN':LNAME,
                ADDR,
                mf:myMethod2,
                myMethod2,
                myMethod3:()=>{
                    console.log('Hello from myMethod3');
                },
                myMethod4:function(){
                    console.log('Hello from myMethod4');
                },
                config:()=>{

                }

            };

    
