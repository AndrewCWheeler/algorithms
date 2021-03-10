// This is the class for our Singly Linked Node
class SLNode {
    // The constructor is built to take 1 parameter, being the value of the node we want
    // to create
    constructor(val) {
        // This is the node's actual value
        this.value = val;
        // And this indicates what is next after the current node.
        this.next = null;
    }
}

// This is the class for our Singly Linked List
class SLList {
    constructor() {
        // This is the beginning of the singly linked list
        this.head = null;
    }

    // Write a method that will return the second to last node in the singly linked list.

    //EXAMPLE: myList = 7 -> 5 -> 3 -> 10 -> 1 ->
    // calling myList.secondToLast() would return the 10 -> node
    secondToLast() {
        // First 2 things we want to do is check to see if the list
        // is empty or if it only has one element.

        // Empty check:
        if (this.isEmpty()) {
            console.log('List is empty.');
            return false;
        }
        // One element check:
        else if (this.head.next == null) {
            console.log('There is only one node in this list.');
            return false;
        } else {
            // Set a walker and a runner
            let walker = this.head;
            let runner = walker.next;
            // We want to move both down the line until the runner is at the last
            // node. If the runner is at the last node, the walker will be at the second
            // to last node!
            while (runner.next != null) {
                walker = runner;
                runner = runner.next;
            }

            return walker;
        }
    }

    // Write a method that takes a singly linked list as a parameter, and concatenates
    // it to the current list.

    // EXAMPLE: If myList = 7 -> 5 -> 3 -> and otherList is 10 -> 1 -> 8 ->
    // and you call myList.concat(otherList) the outcome would be that myList is
    // now 7 -> 5 -> 3 -> 10 -> 1 -> 8 ->
    concat(list) {
        // We should first check to see if this list is empty.
        // If it is, we just set the head to the second list's head.
        if (this.isEmpty()) {
            this.head = list.head;
            // And let's clear the second list just cuz.
            list.head = null;
            return this;
        }
        // Let's start a runner
        let runner = this.head;
        // And move the runner to the end of the list
        while (runner.next != null) {
            runner = runner.next;
        }
        // Once the runner is at the end of the list, set its .next
        // to the head of the second list.
        runner.next = list.head;
        // And now let's clear list 2.
        list.head = null;
        // And return our newly increased list!
        return this;
    }

    // Write a method that splits a singly linked list in 2 on a given value.

    // EXAMPLE: if myList = 10 -> 7 -> 5 -> 3 -> 1 -> and you call
    // myList.splitOnVal(5) myList will be 10 -> 7 -> and the method would return a new
    // SLL of 5 -> 3 -> 1 ->
    splitOnVal(value) {
        // As usual, let's check to see if the list is empty.
        if (this.isEmpty()) {
            console.log("There's no list to split.");
            return false;
        }
        // Now we need to check if the head's value is the one we're trying to split from
        else if (this.head.value == value) {
            // If it is, then basically we clear the current list and return a new list
            // that contains everything that was in the current list.

            // Create the new list
            let newList = new SLList();
            // Set the new list's head to the current head (since it's the value we're looking for)
            newList.head = this.head;
            // Now, clear the current list
            this.head = null;
            // And return the new list.
            return newList;
        } else {
            // Let's start a runner
            let runner = this.head;
            // We want to keep moving the runner down the line
            while (runner.next != null) {
                // Let's check to see if the next node's value is the one we're trying to
                // split at. If it is, we'll create our new list and call it a day!
                if (runner.next.value == value) {
                    // Create the new list
                    let newList = new SLList();
                    // Set its head to the next node;
                    newList.head = runner.next;
                    // Set runner's .next to null to end the current list
                    runner.next = null;
                    // and return the new list!
                    return newList;
                }
                // Otherwise, move runner down the line.
                runner = runner.next;
            }
            // If we've gotten this far, the value isn't in the list.
            console.log('Could not find a node with that value.');
            return false;
        }
    }

    // Write a method that takes a value, and will remove the first instance of a
    // node with that value in the singly linked list.

    // EXAMPLE: with a list of 10 -> 7 -> 3 -> 7 -> 6 ->
    // If you call myList.removeNode(7) the list will become
    // 10 -> 3 -> 7 -> 6 ->

    // NOTE: Removing a node is as simple as redirecting the previous node's
    // .next to the removed node's .next
    removeNode(value) {
        if (this.isEmpty()) {
            console.log('The list is empty.');
        } else if (this.head.value == value) {
            this.head = this.head.next;
        } else {
            let walker = this.head;
            let runner = this.head.next;
            while (runner != null) {
                if (runner.value == value) {
                    walker.next = runner.next;
                    return this;
                }
                walker = runner;
                runner = runner.next;
            }
            console.log('There was no node with that value.');
        }
        return this;
    }

    // Write a method that will return a boolean based on whether or not
    // the Singly Linked List contains a node with a given value.

    // EXAMPLE: If the singly linked list is 7 -> 5 -> 9 -> 2 ->
    // and I call myList.contains(9) it should return true.
    // If on the same list I call myList.contains(11) it should return false.
    contains(value) {
        // Check if the list is empty. Because an empty list would obviously not contain anything!
        if (this.isEmpty()) {
            return false;
        }
        // Let's start our runner at the head of the list
        let runner = this.head;

        // And move the runner down the list
        while (runner != null) {
            // At each node, check to see if the value matches the one being searched for
            if (runner.value == value) {
                // If they match, return true!
                return true;
            }
            // If you haven't found a match, move it on down.
            runner = runner.next;
        }
        // If we reached the end of the list and found no matches, the list must not
        // contain the value, so return false!
        return false;
    }

    // Write a method that will remove the last node in a SLL and return it.

    // EXAMPLE: If the singly linked list is 11 -> 2 -> 7 -> 6 ->
    // and I call myList.removeFromBack() the list should now be
    // 11 -> 2 -> 7 ->
    removeFromback() {
        // If the list is empty, there's nothing to remove!
        if (this.isEmpty()) {
            console.log('The list is already empty!');
            return this;
        }
        // Otherwise, let's check to see if the list has only 1 element!
        else if (this.head.next == null) {
            // If the list only has 1 element, let's hold onto the node
            let temp = this.head;
            // Set the head of the list to null (emptying the list)
            this.head = null;
            // and return what was previously the only node in the list
            return temp;
        } else {
            // If we made it here, the list must have multiple nodes

            // So let's set a runner and a walker, so we can keep track of the previous node.
            let runner = this.head.next;
            let walker = this.head;
            // We want to progress both walker and runner down the list until the runner is the LAST node
            while (runner.next != null) {
                // Setting walker to runner before moving runner to runner's next
                // makes it so once runner is the LAST node, walker will be the SECOND TO LAST node
                walker = runner;
                runner = runner.next;
            }
            // Now that walker is the SECOND TO LAST node, setting its .next to null will remove the LAST node
            // from the SLL
            walker.next = null;

            // and return the node we just chopped off!
            return runner;
        }
    }

    // Write a method that will create a new node, add it to the front of
    // the singly linked list, and reassign the head to the new node.
    addToFront(value) {
        // This one is pretty simple! The case for an empty list vs
        // a non-empty list is exactly the same!

        // Create the new node
        let newNode = new SLNode(value);
        // Then set the new node's .next to the current head.
        // IF THE LIST IS EMPTY! newNode.next will be null. Which is what it should be
        // anyway if there's nothing after it.
        // IF THE LIST IS NOT EMPTY! newNode.next will be the current head of the list,
        // which is exactly what we want!
        newNode.next = this.head;

        // Now, we just set the head of the list to be our new node and call it a day!
        this.head = newNode;
        return this;
    }

    // Write a method that will remove the head node from a singly linked list,
    // and then reassign the head to the next node. Return the node that was removed
    removeFromFront() {
        // We should first check to see if the list is empty, because if it is,
        // there's nothing to remove!
        if (this.isEmpty()) {
            console.log("There's nothing to remove!");
            return false;
        }

        // Otherwise, let's hold on to the first node
        let removed = this.head;

        // now, we need to move the head to the second node
        this.head = removed.next;

        // And just for funsies, let's clear the previous head's .next so it's a truly standalone node
        removed.next = null;

        // Finally, let's return the removed node!
        return removed;

        // NOTE THAT WE DID NOT CHECK TO SEE IF THE NODE IS THE ONLY NODE IN THE LIST!
        // Similar to the previous algorithm (addToFront), if the original head's .next is null,
        // and you remove from the front, this.head is moved to null, which is fine! Because removing
        // from the front of an SLL with only one node is the same as emptying it!!
    }

    // Write a method that will return a boolean depending on whether or not the singly
    // linked list is empty or not.
    isEmpty() {
        // An empty list in its most simplified form is a list
        // with a head that is null.

        // So what this does, it it grabs the boolean for head == null, and returns that.
        return this.head == null;

        // Alternative:
        if (this.head == null) {
            return true;
        }
        return false;
    }

    // Write a method that is given a value, and adds a new node to the end of a SLL
    // where that new node has that value.
    addToBack(value) {
        // First we need to check if the list is empty
        if (this.isEmpty()) {
            // If it is, just set the head to a new node,
            // because adding to the back of an empty list
            // is the same as just setting the head to a node
            this.head = new SLNode(value);
            return this;
        }
        // OTHERWISE
        else {
            // Let's designate a runner to start at the head node
            let runner = this.head;
            // And move it down the list until it reaches the last node
            while (runner.next != null) {
                runner = runner.next;
            }

            // Once the runner is at the end of the list, we set its .next
            // to be a new node
            runner.next = new SLNode(value);
            return this;
        }
    }

    // Write a method that prints the contents of a Singly Linked List.
    printList() {
        // First, let's check if the list is empty
        if (this.isEmpty()) {
            console.log('The list is empty!');
            return;
        }
        // Let's start a runner at the beginning of the singly linked list itself
        var runner = this.head;
        // This string will be added to as we traverse along the SLL
        var string = '';

        // Now we need a way to traverse through the SLL

        // If the runner is not null, we're still looking at a node, so we have things to do!
        while (runner != null) {
            // We want to add the node's value to our string, and a fancy little arrow for looks
            string += runner.value + ' -> ';
            // Then, we want to progress the runner to the NEXT node in the SLL
            runner = runner.next;
        }

        // Once we've finished moving through the entire list, we want to print the string
        console.log(string);
        return this;
    }
}

// This is the class for a Stack where everything is built using methods
// from the SLL class we've been working with
class Stack {
    constructor() {
        this.data = new SLList();
    }

    // Write a method to push a value into our stack using the methods we've built
    // in our singly linked list class
    push(value) {
        this.data.addToFront(value);
        return this;
    }

    // Write a method that will pop a value out of our stack using the methods
    // we've built in our singly linked list class
    pop() {
        return this.removeFromFront();
    }

    // Write a method that will return the value of the node on the top of the stack
    peek() {
        if (this.data.isEmpty()) {
            console.log('empty stack!');
            return this;
        }
        let answer = this.data.head.value;
        return answer;
    }

    // Write a method that will return a boolean based on whether or not the stack
    // is empty using the methods from our singly linked list class
    youEmpty() {
        if (this.data.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }

    // Write a method that will return how many elements are in our stack.
    size() {
        let runner = this.data.head;
        let count = 0;
        while (runner != null) {
            runner = runner.next;
            count++;
        }
        return count;
    }
}

let myStack = new Stack();
myStack.push(7);
myStack.push(8);
myStack.push(9);
myStack.data.printList();
myStack.pop();
myStack.data.printList();
console.log(myStack.peek());
console.log(myStack.youEmpty());
console.log(myStack.size());
