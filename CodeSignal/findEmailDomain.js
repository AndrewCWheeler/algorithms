const findEmailDomain = (address) => {
    let result = address.match(/(?<=@)[^.]+(?=\.).*/);
    return result[0];
}

console.log(findEmailDomain("John.Smith@example.com"));