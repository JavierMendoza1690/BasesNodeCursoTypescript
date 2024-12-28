
const getAgePlugin = require('get-age'); //lo requiere a fuerza, no soporta imnportacion typescript

export const getAge = (birthdate:string)=>{
    //* No necesario porque typescript lo exige
    // if(!birthdate) return new Error('Birthdate is required');

    return getAgePlugin(birthdate);
}

