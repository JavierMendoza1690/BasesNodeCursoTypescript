import { getPokemonById } from "../../src/js-foundation/06.-promises";

describe("../../src/js-foundation/06.-promises",()=>{
    //*DECLARACIONES GLOBALES
    
    test("getPokemonById should return a pokemon name", async()=>{
        const pokemonId=1;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('getPokemonByIde should return and error if pokemon does not exist', async()=>{
        const pokemonId=100000000000000000000000;

        try {
            const pokemonName = await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
            
        } catch (error) {
            
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }
    })
})