// let employee = {
//     name: "Jhansi",
//     age: 21,
//     address: {
//         city: "Hyderabad",
//         state: "Telangana",
//         office: {
//             name: "Cognizant",
//             floor: 5,
//             department: {
//                 name: "IT",
//                 role: "Python Developer",
//                 salary: {
//                     monthly: 40000,
//                     yearly: "4.8 LPA"
//                 }
//             }
//         }
//     }
// }

// ACCESSING THE DATA
// console.log(employee.name);
// console.log(employee.address.city);
// console.log(employee.address.office.name);
// console.log(employee.address.office.department.role);
// console.log(employee.address.office.department.salary.monthly);

// UPDATING THE DATA
// employee.name = "Harini";
// employee.address.city = "Bangalore";
// employee.address.office.name = "TCS";
// console.log(employee);

// ADDING NEW DATA
// employee.email = "priya@gmail.com";
// console.log(employee);

// DELETE THE DATA
// delete employee.age;
// delete employee.address.office.floor;
// console.log(employee);


// NAMED FUNCTION USING WITHOUT INPUT AND WITHOUT RETURN
// function book() {
//     let book = {
//         title: "Harry Potter",
//         author: "J.K. Rowling",
//         price: 500
//     };
//     console.log("Book title is:", book.title);
//     console.log("Author is:", book.author);
//     console.log("Price is:", book.price);
// }
// book();

// Named function — without input and with return
// function mobile() {
//     let mobile = {
//         brand: "Samsung",
//         model: "Galaxy S24",
//         price: 70000
//     };
//     return mobile;
// }
// console.log(mobile());

// Named function — with input and without return
// function student(name, age) {
//     let student = {
//         name: name,
//         age: age
//     };
//     console.log("Student name:", student.name);
//     console.log("Student age:", student.age);
// }
// student("Ravi", 21);

// Named function — with input and with return
function employee(name, salary) {
    return {
        name: name,
        salary: salary
    };
}
console.log(employee("Anjali", 45000));