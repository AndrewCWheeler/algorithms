// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among the
// arguments passed in. You can solve this using the frequency counter pattern
// OR the multiple pointers pattern.

function areThereDuplicates(...args) {
    args.sort();
    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === args[i + 1]) return true;
    }
    return false;
}