
/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number):number{
    return a + b;
}


const sumarFlecha = (a:number, b:number):number => a + b;

function multiplicacion (numero:number, otroNumero?:number, base:number = 2){
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: (/*a:number, b: string, c:boolean*/) => void;
}

function curar( personaje: PersonajeLOR, curarX:number ): void {

    personaje.pv += curarX;
    //console.log(personaje);
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv);    
    }
}

curar(nuevoPersonaje, 20 );
nuevoPersonaje.mostrarHp();



