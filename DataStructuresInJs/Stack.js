/* Stack: last In First Out
Example: Browser's history.push, history.pop
Fucntions: push, pop, peek, length 
Traditionally Arrays are Stacks
*/

const Stack = function () {
  this.count = 0;
  this.stackStorage = {};

  this.push = function (value) {
    this.stackStorage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const poppedValue = this.stackStorage[this.count];
    delete this.stackStorage[this.count];
    return poppedValue;
  };

  this.length = function () {
    return this.count;
  };

  //   returns value at end of stack (without popping)
  this.peek = function () {
    return this.stackStorage[this.count - 1];
  };
};

let MyStack = new Stack();
MyStack.push("First");
console.log(MyStack.length(), MyStack.stackStorage);
MyStack.push("Second");
console.log(MyStack.length(), MyStack.stackStorage);
console.log(MyStack.peek());
MyStack.pop();
console.log(MyStack.length(), MyStack.stackStorage);
