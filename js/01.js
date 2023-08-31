// Завдання 1
function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo(); // Login: Poly, Email: poly@mail.com

// Завдання 2
function User({ name, age, followers }) {
  this.name = name;
  this.age = age;
  this.followers = followers;
}

User.prototype.getInfo = function () {
  console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
};

const mangoUser = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});
mangoUser.getInfo(); // User Mango is 2 years old and has 20 followers

const polyUser = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});
polyUser.getInfo(); // User Poly is 3 years old and has 17 followers

// Завдання 3
function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index !== -1) {
    this.items.splice(index, 1);
  }
};

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const itemsArray = storage.getItems();
console.table(itemsArray);

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
