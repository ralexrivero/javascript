const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gil', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found nemo!');
    }
  }
}

findNemo(nemo);
// findNemo(everyone);
// findNemo(large);

// optional loops

const findNemo2 = array => {
  array.forEach(i => {
    if(i === 'nemo') {
      console.log('Found nemo2!');
    }
  })
}

findNemo2(nemo);

const findNemo3 = array => {
  for (let i of array) {
    if(i === 'nemo') {
      console.log('Found nemo3!');
    }
  }
}

findNemo3(nemo);
