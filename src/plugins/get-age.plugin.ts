
// const getAgePlugin = require('get-age'); //lo requiere a fuerza, no soporta imnportacion typescript

export const getAge = (birthdate:string)=>{
    //* usando paquete get-age
    // if(!birthdate) return new Error('Birthdate is required');
    // return getAgePlugin(birthdate);
    
    //* usando logica propia
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

