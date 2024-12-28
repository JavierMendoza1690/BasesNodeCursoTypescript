"use strict";
// console.log(process.env);
const { LANG, OneDrive } = process.env;
console.table({ LANG, OneDrive });
// desestructuracion de arreglos
const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , , B] = characters;
console.log(B);
