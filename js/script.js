function Person(name, age){
  this.name = name || '이름없음';
  this.age = age || "나이모름";
}

Person.prototype.getName = function(){
  return this.name;
}

Person.prototype.getAge = function(){
  return this.age;
}

function Employee(name, age, position){
  this.name = name || '이름 없음';
  this.age = age || "나이모름";
  this.position = position || '직책 모름';
}

// function Bridge(){
//   Bridge.prototype = Person.prototype;
//   Employee.prototype = new Bridge();
//   Employee.prototype.contructor = Employee;

//   Employee.prototype.getPosition = function(){
//     return this.position;
//   }
// }

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function(){
  return this.position;
}

var gomu = new Employee('고무',30,'CEO');
console.dir(gomu);