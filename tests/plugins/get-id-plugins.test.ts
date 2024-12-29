import { getUUID } from "../../src/plugins";

describe('../../src/plugins/get-id-plugins',()=>{

    test('getUUID should return a UUID',()=>{
        const uuid = getUUID();
        expect(uuid).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/);
    });
});