const str = "JavaScript";

str.slice(0, 4);   // "Java"
str.slice(4, 10);  // "Script"


//split
const text = "a,b,c";

text.split(","); // ["a", "b", "c"]


//split by space
"Hello World".split(" "); // ["Hello", "World"]


//join
const arr = ["Hello", "World"];

arr.join(" "); // "Hello World"


//replace

const text1 = "hi hi hi";

text1.replace("hi", "hello"); 
// "hello hi hi"


//replace all

text.replaceAll("hi", "hello");
// "hello hello hello"
