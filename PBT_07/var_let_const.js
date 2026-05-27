console.log(x);
var x = 5;


console.log(y);
let y = 10;


const z = 15;
z = 20;
console.log(z);


const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

console.log(5 == "5");           // true
console.log(5 === "5");          // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN == NaN);         // false
console.log(0 == false);         // true
console.log(0 === false);        // false
console.log("" == false);        // true

if ("0") console.log("A");           // In hay không?
if ("") console.log("B");            // In hay không?
if ([]) console.log("C");            // In hay không?
if ({}) console.log("D");            // In hay không?
if (null) console.log("E");          // In hay không?
if (0) console.log("F");             // In hay không?
if (-1) console.log("G");            // In hay không?
if (" ") console.log("H");           // In hay không? (space)