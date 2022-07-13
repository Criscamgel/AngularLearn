
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015 
    }
}

const { volumen: vol, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

//console.log('Imprimiendo:' + vol, segundo, cancion, detalles);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log(p3);




