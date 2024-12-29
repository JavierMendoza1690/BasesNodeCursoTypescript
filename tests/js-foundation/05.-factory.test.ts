import { buildMakePerson } from "../../src/js-foundation/05.-factory";

describe("../../src/js-foundation/05.-factory", () => {
 
    // *DECLARACIONES GLOBALES
  interface BuildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
  }

  //FUNCIONES MOCK
  const getUUID = ()=> "123";
  const getAge = (birthdate: string) => 20

  //*EMPEZANDO TESTING

  test("buildMakePerson should be a function", () => {
    expect(buildMakePerson).toBeInstanceOf(Function);
  });

    test("buildMakePerson should return a function", () => {
      const makePerson = buildMakePerson({getUUID, getAge});

      expect(makePerson).toBeInstanceOf(Function);
    });

    test("makePerson should return a person object", () => {
      const makePerson = buildMakePerson({getUUID,getAge});

      const johnDoe = makePerson({
        name: "Jhon Doe",
        birthdate: "2000-01-01",
      });

      expect(johnDoe).toEqual({
        id: "123",
        name: "Jhon Doe",
        birthdate: "2000-01-01",
        age: 20,
      });
    });
});
