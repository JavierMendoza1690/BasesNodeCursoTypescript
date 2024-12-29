"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { LANG, OneDrive } = process.env;
// console.table({LANG, OneDrive});
// desestructuracion de arreglos
exports.characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , , B] = exports.characters;
