
outer:
for (let primeNumber=2; primeNumber < 100; primeNumber++) {
    for(let i = 2; i < primeNumber; i++) {
        // for(let j = 1; i < 10; i++) {
        if (primeNumber % i == 0) continue outer;
           
    }
    if ((primeNumber % primeNumber == 0) && (primeNumber % 1 == 0 )) alert(primeNumber);   
}