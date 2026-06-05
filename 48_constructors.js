// constructor = a special method of a class,
//               accepts arguments and assigns properties

class Student{


    constructor(name,age,gpa){

        this.name = name;
        this.age = age;
        this.gpa = gpa;

    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 20, 3.67);
const student2 = new Student("Patrick", 21, 1.8);

console.log(student1.name); //displays Spongebob
console.log(student1.age); //displays 20
console.log(student1.gpa); //displays 3.67
student1.study(); //displays Spongebob is studying

console.log(student2.name); //displays Patrick
console.log(student2.age); //displays 21
console.log(student2.gpa); //displays 1.8
student2.study(); //displays Patrick is studying