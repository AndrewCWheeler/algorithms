const countDown = (n) => {
    if (n <= 0){
        console.log("All Done!");
        return;
    }
    setTimeout(() => {
        console.log(n);
        n--;
        countDown(n);
    }, 1000);
}

console.log(countDown(10));