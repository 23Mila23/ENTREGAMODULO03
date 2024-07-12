import "./style.css";

interface GrupoMusical {
    nombre : string,
    year : number,
    activo : boolean,
    genero : string,
}

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const grupoA : GrupoMusical = {
    nombre : "The Beatles",
    year : 1960,
    activo : true,
    genero : popRock,

}

const grupoB : GrupoMusical = {
    nombre : "Queen",
    year : 1970,
    activo : false,
    genero : rock,
}

const grupoC : GrupoMusical = {
    nombre : "AC DC",
    year : 1973,
    activo : true,
    genero : hardRock,
}

const grupoD : GrupoMusical = {
    nombre : "Ludwig van Beethoven",
    year : 1770,
    activo : false,
    genero : clasica,
}

const grupoE : GrupoMusical = {
    nombre : "The rolling Stones",
    year : 1962,
    activo : true,
    genero : rock,
}
const estiloNombre = "font-weight: bold; font-size: 18px; background-color: green";

console.log(`%c${grupoA.nombre}`, estiloNombre, grupoA.year, grupoA.activo,popRock);

console.log (`%c${grupoB.nombre}`,estiloNombre,grupoB.year,grupoB.activo,rock)

console.log(`%c${grupoC.nombre}`,estiloNombre,grupoC.year,grupoC.activo,hardRock)

console.log(`%c${grupoD.nombre}`,estiloNombre,grupoD.year,grupoD.activo,clasica)

console.log(`%c${grupoE.nombre}`,estiloNombre,grupoE.year,grupoE.activo,rock)




