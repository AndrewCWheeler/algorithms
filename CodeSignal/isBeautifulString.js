const isBeautifulString = (str) => {
    let obj = {};
    for (let char of str) {
        char = char.charCodeAt(0);
        obj[char] = obj[char] ? obj[char] += 1 : 1;
    }

    let keys = Object.keys(obj);

    for (let key of keys) {
        if (key != 97) {
            if (!(key - 1 in obj)) return false;
        }
    }

    for (let i = 1; i < keys.length; i++) {
        if (obj[keys[i]] > obj[keys[i - 1]]) return false;
    }
    return true;
}

console.log(isBeautifulString("aabbcddd")) // false;
console.log(isBeautifulString("aabbcc")) // true;