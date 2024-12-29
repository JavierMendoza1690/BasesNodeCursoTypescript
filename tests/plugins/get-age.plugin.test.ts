import { getAge } from "../../src/plugins";
const getAgePlugin = require('get-age');

describe('../../src/plugins',()=>{

    test('getAge should return the age of a person', ()=>{
        const birthdate = '1990-16-11';
        const age = getAge(birthdate);

        expect(typeof(age)).toBe('number');
    });

    test('getAge should return the current age of a person', ()=>{
        // arrange
        const birthdate = '1990-11-16';
        const age = getAge(birthdate);
        // act
        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        // assert
        expect(age).toBe( calculateAge);
        
    });

    test('getAge should return 0 years', ()=>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990);
        const birthdate = '1990-11-16';
        const age = getAge(birthdate);
        expect(age).toBe(0);
        
    })





});