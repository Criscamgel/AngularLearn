
/*
    ===== Código de TypeScript =====
*/

interface superHeroeDireccion{
    calle: string;
    pais: string;
    ciudad: string;
}

interface superHeroe {
    nombre: string;
    edad: number;
    direccion: superHeroeDireccion;
    mostrarDireccion: () => string;
}

const superHeroe: superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    } 
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);




