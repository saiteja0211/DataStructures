/* Set: Unique items,Shouldn't contain any duplicate items  
ES6 Set functions: has, add, delete, entries, keys, values 
ES6 Set properties: size 
*/

function customSet() {
  var collection = [];

  this.values = function () {
    return collection;
  };

  this.has = function (value) {
    if (collection.indexOf(value) !== -1) {
      return true;
    }
    return false;
  };

  this.add = function (value) {
    if (!this.has(value)) {
      collection.push(value);
    }
    return collection;
  };

  this.delete = function (value) {
    let index = collection.indexOf(value);
    if (index !== -1) {
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  //   combines both sets
  this.union = function (otherSet) {
    let unionSet = new customSet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((each) => unionSet.add(each));
    secondSet.forEach((each) => unionSet.add(each));
    return unionSet.values();
  };

  // return common elements in both sets
  this.intersection = function (otherSet) {
    let intersectionSet = new customSet();
    let firstSet = this.values();
    firstSet.forEach((each) => {
      if (otherSet.has(each)) {
        intersectionSet.add(each);
      }
    });
    return intersectionSet.values();
  };

  // return difference in both sets elements
  this.difference = function (otherSet) {
    let differenceSet = new customSet();
    let firstSet = this.values();
    firstSet.forEach((each) => {
      if (!otherSet.has(each)) {
        differenceSet.add(each);
      }
    });
    return differenceSet.values();
  };

  //   if the given contains all the elements of current set
  this.subSet = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every((each) => {
      return otherSet.has(each);
    });
  };
}

let setA = new customSet();
let setB = new customSet();

setA.add("a");
setA.add("b");
setA.add("c");
setB.add("a");
setB.add("a");
setB.add("b");
console.log(setA.subSet(setB), setB.subSet(setA));
console.log(setA.union(setB));
console.log(setA.intersection(setB));
console.log(setA.difference(setB));
console.log(setA.add("d"));
console.log(setA.delete("c"));
console.log(setA.values());
