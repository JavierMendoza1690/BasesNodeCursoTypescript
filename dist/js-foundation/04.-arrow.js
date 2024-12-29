"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const users = [
    {
        id: 1,
        name: 'Jhon Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];
const getUserById = (id, callback) => {
    const usuario = users.find((user) => user.id === id);
    if (!usuario) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, usuario);
};
exports.getUserById = getUserById;
