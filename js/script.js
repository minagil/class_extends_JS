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
// console.dir(gomu);

/* 상속을 할 때 일일이 코드를 구현한다면 너무 귀찮은 일. 그래서 함수로 처리 */
var inherit = (function(){
  var F = function() {}
  return function(Child, Parent){
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child._super = Parent.prototype;
  }
})();

function Shape(){
  Shape.prototype.name = 'Shape';
  Shape.prototype.toString = function(){
    return this.name;
  }
}

function TwoDShape() {}
inherit(TwoDShape, Shape);
TwoDShape.prototype.name = '2DShape';

const td = new TwoDShape();
console.log(td.name);

