let numbers = [1, 2, 3, 4, 5,];

//forEach = tidak bisa return
numbers.forEach(function(value, index, array)
{
    console.log("Value : ", value);
});

//Map = bisa return
let output = numbers.map(function(a)
{
    return a + 10;
});
console.log("Array Numbers : ", numbers);
console.log("Array Output : ", output);

//Filter sama dengan map tapi filter bisa use condition.
let output2 = numbers.filter(function(b)
{
    return b > 2;
});
console.log("Filter: ", output2);

//Find sama dengan filter tapi hanya bisa return single nilai saja.
let output3 = numbers.find(function(c)
{
    return c > 2;
});
console.log("Output: ", output3);

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[1][0];
  console.log(myData);


