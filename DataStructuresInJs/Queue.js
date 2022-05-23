/* Queue: First come First Serve

*/

function customQueue() {
  const collection = [];

  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (value) {
    return collection.push(value);
  };
  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.rear = function () {
    return collection[collection.length - 1];
  };

  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let queueA = new customQueue();
queueA.enqueue("a");
queueA.enqueue("b");
queueA.enqueue("c");
queueA.dequeue();
queueA.print();
