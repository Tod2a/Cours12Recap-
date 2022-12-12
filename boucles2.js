let somme = 2
for(let i=2; i<201; i++){
    for(let j=i-1; j>1; j--){
        if(i%j == 0){
            break;
        } 
        if(j == 2 && i%j !==0){
            somme += i
        }
    }
}
console.log(somme);