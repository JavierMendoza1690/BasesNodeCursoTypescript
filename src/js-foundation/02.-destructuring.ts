

// console.log(process.env);


const { LANG, OneDrive } = process.env;

// console.table({LANG, OneDrive});

// desestructuracion de arreglos

export const characters:string[] = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [ , , , B] = characters;

