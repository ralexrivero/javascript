function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boooo');
  }
}

boo([1, 2, 3, 4, 5, 6])

// space complexity
// O (1)

function arrayOfHiNTime(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'Hi'; // Creates new array, add aditional memory space each loop
  }
  return hiArray;
}

let hi = arrayOfHiNTime(10); // Time complexity O(n)
console.log(hi);
