interface User{
    id: number;
    name: string;
}

const users:User[] = [
    {
        id: 1,
        name: 'Jhon Doe',
    },
    {
        id:2,
        name: 'Jane Doe',
    }
];


export const getUserById = ( id:number, callback: (err?:string, user?:User )=>void ) =>{

    const usuario = users.find( (user)=>user.id === id);

    if(!usuario){
        return callback(`User not found with id ${id}`);
    }

    return callback(undefined, usuario); 
    
}
