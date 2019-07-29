"use strict";

console.log("test");
var materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map(function (material) {
  return material.length;
}));