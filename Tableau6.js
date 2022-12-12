let array = [[5, 2, 8], [12, 24, 9], [3, 1, 8]];

for(let i=0; i<array.length; i++){
    sumArray(array[i]);
}
for (let i = 1; i < array.length; i++) {
    let j=i
    while(array[j, array.length-1]<array[j-1, array.length-1] || j==1){
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        j--;
    }
}
console.log(array)

function sumArray(tableau){
    for (let i = 1; i<tableau.length; i++){
        tableau[i] += tableau[i-1];
    }
}