/* PrioritQueue: takes a priority as input if all elements has same priority it behaves as normal queue,
higher priority elements are placed before lower priority items
*/

function PriorityQueue() {
  const collection = [];

  this.print = function () {
    console.log(collection);
  };

  //   based of given priority of element
  this.enqueue = function (value) {
    if (this.isEmpty()) {
      collection.push(value);
    } else {
      let added = false;
      for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        if (value[1] > element[1]) {
          let index = collection.indexOf(element);
          collection.splice(index, 0, value);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(value);
      }
    }
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

let queueA = new PriorityQueue();
queueA.enqueue(["a", 10]);
queueA.enqueue(["b", 4]);
queueA.enqueue(["c", 4]);
queueA.enqueue(["d", 8]);
queueA.print();
queueA.dequeue();
queueA.enqueue(["a", 1]);
queueA.print();
