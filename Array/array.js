const nums = [1, 2, 3, 4];

//maps


const doubled = nums.map(n => n * 2);

console.log(doubled); // [2, 4, 6]


//filter



const evens = nums.filter(n => n % 2 === 0);

console.log(evens); // [2, 4]



//reduce 



const sum = nums.reduce((total, n) => {
    return total + n;
}, 0);

console.log(sum); // 10



//for each 



nums.forEach(n => {
  console.log(n);
});






