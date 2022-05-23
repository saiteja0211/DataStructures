function* myGenerator() {
  console.log("Before 1 ");
  yield 1;
  console.log("Before {} ");
  yield {};
  console.log("Before 2 ");
  yield 2;
  yield [4, 9];
  yield 9 + 9;
  console.log("last");
}
const myGenObj = myGenerator();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());

// usage: uniqueids
function* uniqueIdGenerator() {
  let id = 1;
  while(true){
    yield id;
    id++;
  }
}

const uniId = uniqueIdGenerator();
console.log(uniId.next());
console.log(uniId.next());
console.log(uniId.next());
