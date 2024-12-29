import exp from "constants";
import { getUserById } from "../../src/js-foundation/03.-callbacks";

describe("../../src/js-foundation/03.-callbacks", () => {
  test("getUserById should be a function", () => {
    expect(getUserById).toBeInstanceOf(Function);
  });

  test("getUserById should return an error if user does not exist", (done) => {
    const id = 10;
    expect(
      getUserById(id, (err, user) => {
        expect(err).toBe(`User not found with id ${id}`);
        expect(user).toBeUndefined();
      })
    ).toBeUndefined();

    done(); //*Solicitando que espere peticiones asincronas si las hay
  });

  test("getUserById should return an user Jhon Doe", (done) => {
    const id = 1;
    expect(
      getUserById(id, (err, user) => {
          expect(err).toBeUndefined();
          
          //*toEqual se usa para comparar objetos
          expect(user).toEqual({ id: 1, name: 'Jhon Doe' }); 
      }));
    done();
  });
});
