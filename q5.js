let students = [];

class Tsionet {
  name;
  id;
  age;

  constructor(name, id, age) {
    this.name = name;
    this.id = id;
    this.age = age;
  }

  addStudent() {
    students.push(this);
    console.log(students);
  }

  deleteStudent() {
    let index = students.indexOf(this);
    if (index != -1) {
      students.splice(index, 1);
    }
    console.log(students);
  }
}

let student1 = new Tsionet("chen", 4576778, 28);
let student2 = new Tsionet("yoni", 897832, 28);

function addStudent2(s) {
  students.push(s);
  console.log(students);
}

addStudent2(student1);
student2.addStudent();
student1.deleteStudent();
student1.addStudent();
