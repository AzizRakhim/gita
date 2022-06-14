// Problem 38

let n = [1, 3, 2, 4, 2, 1, 9, 1];
let numbers = [...new Set(n.map(item => item))];

let frequency = [];

for(let i = 0; i < numbers.length; i++){
  let count = 0;
  for(let k = 0; k < n.length; k++){
    if(numbers[i] == n[k]){
      count++;
    }
  }
  frequency.push(count);
}

console.log(numbers)
console.log(frequency);


