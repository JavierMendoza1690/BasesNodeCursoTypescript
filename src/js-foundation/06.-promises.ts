import { httpClient } from '../plugins';

export const getPokemonById = async (id: string|number, callback?: Function):Promise<string> =>{
   
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // * Metodo 1: peticion http
    // return fetch( url )
    // .then( response => response.json())
    // // .then( ()=> {throw new Error('Pokemon no existe')})
    // .then( pokemon => pokemon.name)

     // * Metodo 2: peticion http
    //  const response = await fetch (url);
    //  const pokemon = await response.json();
    //  throw new Error('Pokemon no existe') // simulando error
     
     //* Metodo 3: peticion http con arquitectura de plugins (patron adaptador)
     try {
         const pokemon = await httpClient.get(url); //solicitud con axios
         return pokemon.name;
         
        } catch (error) {
            throw `Pokemon not found with id ${id}`
        }
        
}
