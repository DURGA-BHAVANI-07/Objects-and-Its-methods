var car={
    make:"Toyota",
    model:"camry",
    Year:2023
}
// Object.freeze(a);
car.color="black";
console.log(Object.freeze(car));
car.color="grey";

var user={
    name:"Bhavani",
    age:"21",
    email:"bhavanidurga579@gmail.com"
}
Object.freeze(user);
console.log(Object.isFrozen(user));

var product={
    name:"laptop",
    category:"electronic",
    price:60000
}
product.model="i5 8gb";
// Object.seal(product);
console.log(Object.isSealed(product));

var laptop={
    brand:"lenovo",
    model:"i5 12th gen",
    price:"60000"
}
//   Object.keys(laptop);
  console.log(Object.keys(laptop));

  var house={
    location:"RJY",
    size:"500cents",
    price:"60,00000"
  }
  console.log(Object.values(house));

  var smartphone={
    brand:"MI",
    model:"redminote9",
    price:"15000"

}
product.price="20000";
Object.seal(product);
console.log(Object.isSealed(product));

var book={
    title:"mahabharatham",
    author:"ved vyasa",
    publishedyear:"3rd century BCE"
}
Object.freeze(book);
book.publishedyear="2rd century BCE";
console.log(Object.isFrozen(book));

var person={
    firstName:"Kalisetti",
    lastName:"Durga Bhavani",
    age:21
}
Object.keys(person);
 Object.values(person);
console.log(Object(person));

var course={
    title:"full stack development",
    instructor:"vamsi sir",
    duration:"6 months"
}
delete course.duration;
console.log(Object.entries(course));

var employee={
    name:"bhavani",
    position:"Full stack development",
    salary:4500
}
console.log(Object.seal(employee));
employee.position="Frontend developer"
// console.log(Object.seal(employee));

