class Student {
    constructor(firstname, lastname, grade) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = grade;
        this.tardies = 0;
        this.isExpelled = false;
    }
    checkExpelledStatus() {
        if (this.tardies > 3) {
            this.isExpelled = true;
        }
    }
    addTardy() {
        this.tardies += 1;
        this.checkExpelledStatus();
        if (this.isExpelled === true) {
            return `Hello, ${this.firstname}, you have been late to class ${this.tardies} times. Unfortunately, this exceeds the upper limit allowed. You are hereby expelled for the remainder of this semester and will receive a status of "Incomplete" in each of your classes. Please report to the Principal's Office to receive your letter of excusal.`
        } else return `Hello, ${this.firstname}, you been late to class ${this.tardies} times. If you are late to class ${4 - this.tardies} more times, you will be expelled for the remainder of this semester.`
    }
}

let Charlie = new Student ("Charlie", "Chaplan", 12);

console.log(Charlie);

Charlie.addTardy();

console.log(Charlie);

console.log(Charlie.addTardy());

