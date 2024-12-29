"use strict";
// DEPENDENCIAS
// require('./js-foundation/02.-destructuring');
// require('./js-foundation/03.-callbacks');
// *01.-Template.ts
// import { emailTemplate } from "./js-foundation/01-template";
// console.log(emailTemplate);
// *02.-DESTRUCTURING
// require('./js-foundation/02.-destructuring'); //con require para que se ejecute el codigo automaticamente
//*03 CALLBACKS
// import { getUserById } from "./js-foundation/03.-callbacks";
// getUserById(2, (err, user) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(user);
// });
//*04 ARROW FUNCTIONS
// import { getUserById } from "./js-foundation/04.-arrow";
// getUserById(2, (err, user) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(user);
// })
// *05.-FACTORY FUNCTIONS
// const {getAge, getUUID} = require('./plugins')
// const {buildMakePerson} = require("./js-foundation/05.-factory");
// const obj = {name:'javier', birthdate: '1990-11-16'}
// const makePerson = buildMakePerson( {getUUID, getAge});
// const Javier = makePerson(obj)
// console.log(Javier);
// *06.-PROMISES
// import { getPokemonById } from "./js-foundation/06.-promises";
// getPokemonById(4)
//   .then((pokemonName) => console.log({ pokemonName }))
//   .catch((err) => console.error("Por favor intente de nuevo"))
//   .finally(() => console.log("Finalmente"));
// *07.-WINSTON
// import { buildLogger } from "./plugins/logger.plugin";
// const logger = buildLogger("app.js");
// logger.log("Hola mundo");
// logger.error("Esto es algo malo");
