// funciones Helpers (no son partes de la lógica del analisis pero necesarias para los cálculos)
function par (numero){
    /* if(numero % 2 == 0){
         return true;
     }
     else{
         return false;
     }*/
     return (numero % 2 == 0);
 }
 
 //mediana Salarios
 function medianaSalarios(lista){
     const mitad = parseInt(lista.length / 2 );
     let mediana;
 
     if(par(lista.length)){
         const elemento1 = lista[mitad - 1];
         const elemento2 = lista[mitad]
         mediana = (elemento1 + elemento2) / 2 ;
         return mediana;
     }else{
          mediana = lista[mitad];
          return mediana;
     }
 }

 //Mediana General

const salariosColombia = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosColombia.sort(
    function(salarioA,salarioB){
        return salarioA-salarioB;
    }
);

//Mediana top 10%

const spliceStart = (salariosColSorted.length * .90);
const spliceCount = (salariosColSorted.length - spliceStart);

const top10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10 = top10;
const medianaGeneral = medianaSalarios(salariosColSorted);

console.log(medianaGeneral, medianaTop10 );