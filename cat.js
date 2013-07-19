function Cat(name, owner){
  this.name = name;
  this.owner = owner;

}

Cat.prototype.cute_statement = function(){
  console.log(this.owner + " loves " + this.name);
};

var cat1 = new Cat("Sally", "Bobby");
var cat2 = new Cat("Stripey", "Bobby");

Cat.prototype.cute_statement = function(){
  return "Everyone loves " + this.name;
}

console.log(cat1.cute_statement())

Cat.prototype.meow = function(){
  return this.name + " says meow now";
};

cat2.meow = function(){
  return this.name + " never meows";
};

console.log(cat1.meow());
console.log(cat2.meow());