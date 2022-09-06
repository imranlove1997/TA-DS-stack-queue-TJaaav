// class Queue {
//   constructor(capacity = Infinity) {
//     this.storage = [];
//     this.capacity = capacity;
//   }

//   get length() {
//     return this.storage.length;
//   }

//   enqueue(val) {
//     if(this.storage.length === this.capacity) {
//       alert("Queue overflowing");
//     }else {
//       this.storage.push(val);
//       return this.storage.length;
//     }
//   }

//   dequeue() {
//     return this.storage.shift();
//   }

//   peek() {
//     return this.storage[0];
//   }

//   printAll() {
//     this.storage.forEach(c => {
//       console.log(c);
//     });
//   }

//   isEmpty() {
//     return this.storage.length === 0;
//   }
// }