////You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2.What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

////Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

////    Example

////For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
////knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

////You can only carry the first item.

////For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
////knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

////You're strong enough to take both of the items with you.

////For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
////knapsackLight(value1, weight1, value2, weight2, maxW) = 7.

////You can't take both items, but you can take any of them.


const knapsackLight = (val1, wt1, val2, wt2, maxW) => {
    if (wt1 + wt2 <= maxW) return val1 + val2;
    else if (wt1 >= wt2) {
        if (wt1 <= maxW && val1 >= val2) {
            return val1
        }
        else if (wt2 <= maxW && val2 >= val1) {
            return val2
        }
        else return 0;
    }
    else if (wt2 >= wt1) {
        if (wt2 <= maxW && val2 >= val1) {
            return val2
        }
        else if (wt1 <= maxW) {
            return val1;
        }
        else return 0;
    }
    else if (wt1 === wt2 && wt1 <= maxW) {
        return val1;
    }
    else return 0;
}

console.log(knapsackLight(5, 3, 7, 4, 6));