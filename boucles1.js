let comparaison = prompt("Donnez le chiffre à comparer");
for (let i = 0; i < 101; i++) {
    if (i % comparaison != 0) {
        console.log(i)
    }
}