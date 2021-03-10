class DLNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DLList {
    constructor(){
        this.head = null;
    }

    // Write a method that will return whether or not the 
    // doubly linked list is empty.
    isEmpty(){
        return this.head == null;
    }

    // Write a method that will add a new node to the end of our
    // doubly linked list.
    append(value) {
        if(this.isEmpty()){
            this.head = newDLNode(value);
            return this;
        }
        else {
            let runner = this.head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = new DLNode(value);
            runner.next.prev = runner;
            return this; 
        }
    }

    // Write a method that will add a new node to the beginning of
    // our doubly linked list.
    prepend(value) {
        if(this.isEmpty()){
            this.head = newDLNode(value);
            return this;
        }
        var NewNode = new DLNode(value);
        NewNode.next = this.head;
        this.head.prev = NewNode;
        this.head = NewNode;
    }

    // Write a method that will add a new node at a given "index" of our
    // doubly linked list

    // NOTE! Test for if the index given is out of range!
    push(value, index){
        if(this.isEmpty() && index == 0) {
            this.head = new DLNode(value);
            return this;
        }
        if(this.isEmpty() && index > 0) {
            console.log("The index is out of range!")
            return;
        }

        if(!this.isEmpty() && index == 0){
            return this.prepend(value);
        }
        var runner = this.head
        var counter = 0;
        while(counter < index) {
            if(runner == null) {
                console.log("The index is out of range!")
                return;
            }
            runner = runner.next; 
            counter ++;
        }
        var NewNode = newDLNode(value);
        NewNode.next = runner;
        NewNode.prev = runner.prev;
        NewNode.prev.next = NewNode;
        runner.prev = NewNode;
        return this;
    }
}