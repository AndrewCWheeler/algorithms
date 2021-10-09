const calculateCurrency = (amt, rate) => {
    return amt / rate;
}

const amountEUR = 453838;

const exchangeRate = 5 / 6;

console.log(exchangeRate);

console.log(calculateCurrency(amountEUR, exchangeRate));