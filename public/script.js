// Модифікувати методи об’єкту 
// counter таким чином щоб можна 
// було зробити наступний виклик:

let counter = {
    value: 0,
    initialValue: 0,
    next: function() {
        this.value++;
        return this;
    },
    previous: function() {
        this.value--;
        return this;
    },
    reset: function() {
        this.value = this.initialValue;
        return this;
    },
    print: function() {
        console.log(this.value);
        return this;
    }
};

counter
    .next()
    .next()
    .print() // 2
    .reset()
    .print(); // 0


// Модифікувати код таким 
// чином щоб масив users став 
// відсортованим за віком.

const createUser = function (name, age) {
    return {
        name,
        age,
        toString: function () {
            return `${this.name} is ${this.age}y.o.`;
        },
    };
};

const users = [
    createUser("John", 21),
    createUser("Tory", 18),
    createUser("Kate", 23),
    createUser("Pete", 22),
];

console.log(users.sort((a, b) => a.age - b.age));


// * Модифікувати код таким 
// чином щоб масив users став 
// відсортованим за віком. Не 
// модифікуючи виклик методу 
// sort();

const createUser2 = function (name, age) {
    return {
        name,
        age,
        toString: function () {
            return this.age;
        },
    };
};

const users2 = [
    createUser2("John", 21),
    createUser2("Tory", 18),
    createUser2("Kate", 23),
    createUser2("Pete", 22),
];

console.log(users2.sort((a, b) => a - b));