// Add many friends and then figure out which ones are old enough to drink in Denmark.
// Seed Data
var friends = [{
  id: 1,
  first_name: "James",
  last_name: "Bond",
  full_name: "James Bond",
  age: 39,
  email: "[redacted]"
},
{
  id: 2,
  first_name: "Dora",
  last_name: "the Explorer",
  full_name: "Dora the Explorer",
  age: 5,
  email: "dora@explorers.org"
},
{
  id: 3,
  first_name: "Charles",
  last_name: "Brown",
  full_name: "Charles Brown",
  age: 10,
  email: "charliebrown@peanuts.com"
},
{
  id: 4,
  first_name: "Mickey",
  last_name: "Mouse",
  full_name: "Mickey Mouse",
  age: 88,
  email: "mickey@disney.com"
}];

function addFriend(target) {
  if(target) {
    var generate_id = function(_target) {
      return parseInt(_target.length + 1, 10);
    };

    var first_name = prompt("First name: ");
    var last_name = prompt("Last name: ");
    var age = prompt("Age: ");
    var email = prompt("Email: ");
    var id = generate_id(target);
    target.push(new Person(id, first_name, last_name, email, age));
  } else {
    console.log('Please specify a target collection');
  }
}

function isOldEnough(item) {
  if(item.age > 16) {
    return true;
  } else {
    return false;
  }
}

function Person(id, first_name, last_name, email, age) {
  var person = this;
  person.id = id;
  person.first_name = String(first_name);
  person.last_name = String(last_name);
  person.email = String(email);
  person.age = parseInt(age);

  Object.defineProperty(person, "full_name", {
    get: function() {
      return person.first_name + " " + person.last_name;
     }
  });
}

var grown_ups = friends.filter(isOldEnough);
console.log(grown_ups);
