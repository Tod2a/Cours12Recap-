let myArray = [5, 3, 8, 1];
for (let i=0; i < myArray.length; i++) {     
    for (let j=0; j < myArray.length-i-1; j++) {         
        if (myArray[j] > myArray[j+1]) { 
            let temp = myArray[ j ];
            myArray[ j ] = myArray[ j+1 ]
            myArray[ j+1 ] = temp;
        } else{
            break;
        }
    }
}