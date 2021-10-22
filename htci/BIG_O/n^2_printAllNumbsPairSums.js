function PrintAllNumsThenPairSum(numbers) {

        console.log('These are the numbers:');
        numbers.forEach(function(number) {
                console.log(number);
        });

        console.log('And these are their sums:');
        numbers.forEach(function(firstNumber) {
                numbers.forEach(function(secondNumber) {
                        console.log(firstNumber + ' + ' + secondNumber + ' = ' + (firstNumber + secondNumber));
                });
        });
}

PrintAllNumsThenPairSum([1, 2, 3, 4, 5])

// O(n + n^2) rule 4 drop non dominant
// BIG O(n^2)