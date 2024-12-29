"use strict";
// const getAgePlugin = require('get-age'); //lo requiere a fuerza, no soporta imnportacion typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    //* usando paquete get-age
    // if(!birthdate) return new Error('Birthdate is required');
    // return getAgePlugin(birthdate);
    //* usando logica propia
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
