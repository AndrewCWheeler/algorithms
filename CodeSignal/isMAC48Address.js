const isMAC48Address = (str) => {
    const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    return regex.test(str);
}

console.log(isMAC48Address("00-1B-63-84-45-E6"));