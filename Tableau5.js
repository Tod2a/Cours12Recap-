let array = [2, 5, 8, 2];
for (let i = 1; i<array.length; i++){
    array[i] += array[i-1];
}
console.log(array);