//Encapsulation
const employee = {
  salary: 30000, //property
  overtime: 10,
  rate: 20,
  getWage: function() { //method using function()
    return this.salary + (this.overtime * this.rate)
  },
  getSalary() { //shorthand
    return this.salary
  },
  getSalary2: () => { //undefined as cannot reference this.
    return this.salary
  }
} 

console.log(employee.getWage())
// console.log(employee.getSalary2())

//Abstraction
function Employee (name, age, salary) {
  this.name = name
  this.age = age
  this.salary = salary

  //abstraction function
  const calculateSalary = () => {
    const monthlyBonus = 1000
    const finalSalary = salary + monthlyBonus
    // console.log('Final Salary', finalSalary)
  }

  this.getEmpDetails = function () {
    // console.log('Name: ' + this.name + ' | Age: ' + this.age)
    calculateSalary()
  }
};

let emp = new Employee('John', 31, 20000)
emp.getEmpDetails();

//Inheritance


//Polymorphism