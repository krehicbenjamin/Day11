var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  var lastPet = myPets[myPets.length - 1];
  myNewPets.push("Bird", "Fish");
  myNewPets.pop("Fish");
  myNewPets.unshift("Lion");
  firstPet = myNewPets[0];
  var firstPet = myNewPets[0];
  var temp = myNewPets[myNewPets.length - 1];
  return [firstPet, lastPet, temp];
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
