class BSNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor(){
        this.root = null;
    }

    // Write a method that will return a boolean based on whether
    // or not the tree contains a node with the given value

    // Try this both with and without recursion if you can.
    contains(value, runner = this.root) {
        if(runner == null)
        {
            return false;
        }
        if(runner.value == value)
        {
            return true; 
        }
        if(value > runner.value)
        {
            if(runner.right == value)
            {
                return true;
            }
            return this.contains(value, runner.right);
        }
        else
        {
            if(runner.left == value)
            {
                return true
            }
            return this.contains(value, runner.left);
        }
        


    }

    // I don't think I need to say anything for this one lol
    isEmpty(){
        return this.root == null;
    }

    // Write a method that will insert a new node into the BST
    insert(value, runner = this.root){
        if(runner == null){
            this.root = new BSNode(value);
            return this;
        }

        if(value >= runner.value) {
            if(runner.right == null){
                runner.right = new BSNode(value);
                return this;
            }
            return this.insert(value, runner.right);
        }
        else {
            if(runner.left == null) {
                runner.left = new BSNode(value);
                return this;
            }
            return this.insert(value, runner.left);
        }
    }

    // Write a method that will return the largest element in the BST
    max(){
        if(this.isEmpty()){
            console.log("Tree is empty!");
            return null;
        }
        let runner = this.root;
        while(runner.right != null){
            runner = runner.right;
        }
        return runner.value;
    }

    // Write a method that will return the smallest element in the BST
    min(){
        if(this.isEmpty()){
            console.log("Tree is empty!");
            return null;
        }

        let runner = this.root;
        while(runner.left != null){
            runner = runner.left;
        }
        return runner.value;
    }

    printTree(){
        if(this.root == null) {
            console.log("This tree is empty.");
            return this;
        }

        this.printHelper();
    }

    printHelper(toPrint = "", runner = this.root) {
        if(runner == null) {
            return this;
        }

        toPrint += "\t";
        this.printHelper(toPrint, runner.right);
        console.log(`${toPrint}${runner.value}`);
        this.printHelper(toPrint, runner.left);
    }
}