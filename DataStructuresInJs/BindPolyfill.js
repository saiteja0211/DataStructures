//call, apply, bind => function borrowing: borrow a function & execute it with other object

const printFullName = function (city, country) {
  console.log(
    this.firstName + this.lastName + " is in " + city + " in  " + country
  );
};

let custName = {
  firstName: "Sai",
  lastName: "Teja",
};

printFullName.call(custName, "Hyderabad", "India");

printFullName.apply(custName, ["Hyderabad", "India"]);

const boundMethod = printFullName.bind(custName, "Hyderabad", "India");
boundMethod();
// console.log("Ac opy of printFullName is returned: boundMethod=", boundMethod);

// POLYFILL
let nameObject = {
  firstName: "Sai",
  lastName: "Teja",
};

const printName = function () {
  console.log(this.firstName + this.lastName);
};

// const boundPrintName = printName.bind(name);
// boundPrintName();

Function.prototype.myBind = function (nameObj) {
  const printNameFunc = this;

  return function () {
    printNameFunc.call(nameObj);
  };
};
const myBoundPrintName = printName.bind(nameObject);
myBoundPrintName();
