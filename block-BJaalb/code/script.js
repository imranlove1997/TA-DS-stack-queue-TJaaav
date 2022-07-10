// class Stack {
//     constructor(capacity = Infinity) {
//         this.storage = [];
//         this.capacity = capacity;
//     }
//     get length() {
//         return this.storage.length;
//     }
//     add(num) {
//         if(this.storage.length == this.capacity) {
//             alert('Stack is overflowing');
//         } else {
//             this.storage.push(num);
//             return this.storage.length;
//         }
//     }
//     remove() {
//         return this.storage.pop();
//     }
//     peek() {
//         return this.storage[this.length - 1];
//     }
//     printAll() {
//         for(let i = this.length - 1; i >= 0; i--) {
//             console.log(this.storage[i]);
//         }
//     }
//     isEmpty() {
//         return this.storage.length === 0 ? true : false;
//     }
// }

// const stack = new Stack();

// stack.add(10);
// stack.add(12);
// stack.add(120);
// stack.add(1);
// stack.add(4);

// console.log(stack.remove()); // => 4
// console.log(stack.length); // => 4
// console.log(stack.remove()); // => 1
// console.log(stack.length); // => 3

// console.log(stack.peek()); // 120

// console.log(stack.isEmpty()); // false

// console.log(stack.remove()); // => 120

// console.log(stack.add(100)); // 3

// console.log(stack.peek()); // => 100

// console.log(stack.remove()); // => 100
// console.log(stack.remove()); // => 12
// console.log(stack.remove()); // => 10

// console.log(stack.isEmpty()); // true

// // Test 2

// const stack2 = new Stack(4);

// stack2.add(10);
// stack2.add(12);
// stack2.add(120);
// stack2.add(1);
// stack2.add(4); // alert Stack is overflowing

// console.log(stack2.remove()); // => 1
// console.log(stack2.length); // => 3
// console.log(stack2.remove()); // => 120
// console.log(stack2.length); // => 2

// console.log(stack2.peek()); // 12

// console.log(stack2.isEmpty()); // false

// console.log(stack2.remove()); // => 12

// console.log(stack2.add(100)); // 2

// console.log(stack2.peek()); // => 100

// console.log(stack2.remove()); // => 100
// console.log(stack2.remove()); // => 10

// console.log(stack2.isEmpty()); // true

class Stack {
    constructor(capacity = Infinity) {
        this.storage = {};
        this.capacity = capacity;
    }
    get length() {
        return Object.keys(this.storage).length;
    }
    add(value) {
        let lastIndex = this.length;
        if(this.length === this.capacity) {
            alert('Queue is overflowing')
        } else {
            this.storage[lastIndex] = value;
            return Object.keys(this.storage).length;
        }
    }
    remove() {
        let element = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        return element;
    }
    peek() {
        return this.storage[this.length - 1];
    }
    printAll() {
        for(let i = this.length; i >= 0; i--) {
            console.log(this.storage[i]);
        }
    }
    isEmpty() {
        return Object.keys(this.storage).length === 0 ? true : false;
    }
}

const stack = new Stack();

stack.add(10);
stack.add(12);
stack.add(120);
stack.add(1);
stack.add(4);

console.log(stack.remove()); // => 4
console.log(stack.length); // => 4
console.log(stack.remove()); // => 1
console.log(stack.length); // => 3

console.log(stack.peek()); // 120

console.log(stack.isEmpty()); // false

console.log(stack.remove()); // => 120

console.log(stack.add(100)); // 3

console.log(stack.peek()); // => 100

console.log(stack.remove()); // => 100
console.log(stack.remove()); // => 12
console.log(stack.remove()); // => 10

console.log(stack.isEmpty()); // true

// Test 2

const stack2 = new Stack(4);

stack2.add(10);
stack2.add(12);
stack2.add(120);
stack2.add(1);
stack2.add(4); // alert Stack is overflowing

console.log(stack2.remove()); // => 1
console.log(stack2.length); // => 3
console.log(stack2.remove()); // => 120
console.log(stack2.length); // => 2

console.log(stack2.peek()); // 12

console.log(stack2.isEmpty()); // false

console.log(stack2.remove()); // => 12

console.log(stack2.add(100)); // 2

console.log(stack2.peek()); // => 100

console.log(stack2.remove()); // => 100
console.log(stack2.remove()); // => 10

console.log(stack2.isEmpty()); // true