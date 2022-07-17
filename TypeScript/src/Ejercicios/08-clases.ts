/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor( public nombre: string,
                 public direccion: string ){}
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreRal?: string,
        ){
            super(nombreRal, 'Cra con calle');
        }
}

const ironman = new Heroe(/* nombreReal */'Ironman', 45, 'Tony');

console.log(ironman);









