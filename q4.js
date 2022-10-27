//a
let num = [2, 4, 6, 7];
let cloneNum = [...num];
console.log(cloneNum);

//b
let firstSecond = [[...num][0], [...num][1]];
console.log(firstSecond);

//c
let first, second, lastNums;
[first, second, ...lastNums] = num;
console.log(first, second, lastNums);

//d
let person = {
  fName: "chen",
  lName: "kiso",
  age: 28,
  id: 89087986,
};

let { fName, lName, ...otherInfo } = person;
console.log(fName);
console.log(lName);

//e
function addPerson({ fName, lName, ...rest } = person) {
  return {
    fName: fName,
    lName: lName,
    args: rest,
  };
}
let person2 = addPerson();
console.log(person2);
