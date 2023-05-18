console.log("==============================");

function myFunc(theObject) {
  theObject.make = "Toyota";
  console.log("theObject.make 출력 : ", theObject.make);
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

const x = mycar;
console.log("x 출력 : ", x);

// console.log("myFunc 출력 : ", myFunc(mycar.make));
myFunc(mycar);

const y = mycar;
console.log("y 출력 : ", y);

console.log("==============================");
