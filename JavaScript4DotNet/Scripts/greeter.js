//                                                function greeter (person: string) {
//                                                var greeter = (person: string) => {
var greeter = function (person) {
    return "<i>Hello there, " + person + "</i>";
};
var user = "Jane Doe";
//user = [0, 1, 2];
document.body.innerHTML += greeter(user);
//#region interface
/* Scroll to next example



























*/
//interface Person {
//    firstname: string;
//    lastname: string;
//}
//function greeter2(person : Person) {
//    return "Hello, " + person.firstname + " " + person.lastname;
//}
//var user2 = {firstname: "John", lastname: "Smith"};
//document.body.innerHTML += greeter2(user2);
//#endregion
//#region class
/* Scroll to next example



























*/
//class Greeter3 {
//   constructor(public greeting: string) { }
//   greet() {
//       return "<h1>" + this.greeting + "</h1>";
//   }
//};
//var greeter3 = new Greeter3("Hello, EastBay.Net");
//var str = greeter3.greet();
//document.body.innerHTML += str;
//#endregion
