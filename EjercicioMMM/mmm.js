/* 
Media aritmetica:
es la suma directa de todos los valores divididos entre el total de valores 
Casos de NO uso:
calculo de sueldos - la diferencia de valores influye radicalmente en el promedio
ej: v1: 100,  v2: 200, v3: 10000000, las minorias rompen la regla de la media aritmetica

Media:
Ordenando la lista de menor a mayor hay que encontrar el valor de en medio 
Si el valor es par se toman ambos valores y se dividen entre 2

Moda: 
Es el elemento que mas se repite dentro de una lista de valores 
*/




//----------------------MEDIA-----------------------------------

function calcMedia (lista){

   /* let sumaLista = 0;
    
    for(let valor in lista){
        sumaLista += lista[valor];
    }
    */
    const sumaLista = lista.reduce(
        function (valores=0,nuevoElemento){
            return valores + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

let listaAgregada = [];

function agregarValorLista (){
    const valor = document.getElementById("valores");
    const convertidor = Number(valor.value);
    listaAgregada.push(convertidor);
    const mensaje = document.getElementById("lista");
    mensaje.innerText = "Tu lista actual es:  " + listaAgregada;
    valor.value="";
}
function calcularMediaAritmetica() {
    const mensaje = document.getElementById("resultado");
    mensaje.innerText = "El promedio es: " + calcMedia(listaAgregada);
} 



//----------------------MEDIANA-----------------------------------


let listaAgregadaMediana = [];

function agregarValorListaMediana(){
    const valor = document.getElementById("valores-mediana");
    const convertidor = Number(valor.value);
    listaAgregadaMediana.push(convertidor);
    ordenador(listaAgregadaMediana);
    const mensaje = document.getElementById("lista-mediana");
    mensaje.innerText = "Tu lista actual es:  " + listaAgregadaMediana;
    valor.value="";
}


function calcMediana(){
    const mitadLista = parseInt(listaAgregadaMediana.length / 2); 
    
    let mediana;
    
    if (par(listaAgregadaMediana.length)){
        const elemento1 = listaAgregadaMediana[mitadLista - 1];
        const elemento2 = listaAgregadaMediana[mitadLista];
        //mediana = (elemento1 + elemento2) / 2 ;
        mediana = calcMedia([elemento1,elemento2]);
        const mensaje = document.getElementById("resultado-mediana");
        mensaje.innerText = "La mediana es: " + mediana;
    }
    else{
        mediana = listaAgregadaMediana[mitadLista];
        const mensaje = document.getElementById("resultado-mediana");
        mensaje.innerText = "La mediana es: " + mediana;
    }
}

function ordenador (lista){
    var aux;
    for(let i = 0 ; i < lista.length ; i ++){
        if(lista[i] > lista[i+1]){
            aux = lista[i];
            lista[i]=lista[i+1];
            lista[i+1] = aux;
        }
    }
    return lista;
}

function par (numero){
    if(numero%2 == 0){
        return true;
    }
    else{
        return false;
    }
}



//----------------------MODA-----------------------------------

//const lista = [1,2,2,5,7,6,2,7,2];

let listaAgregadaModa = [];

function agregarValorListaModa(){
    const valor = document.getElementById("valores-moda");
    const convertidor = Number(valor.value);
    listaAgregadaModa.push(convertidor);
    const mensaje = document.getElementById("lista-moda");
    mensaje.innerText = "Tu lista actual es:  " + listaAgregadaModa;
    valor.value="";
}

function calcModa(){
    const listaCount = {};
listaAgregadaModa.map(
    function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }
        else{
            listaCount[elemento] = 1;            
        }
    }
);
const listaModificada = Object.entries(listaCount).sort(
    function(a, b){
      return a[1] - b[1] ; 
    }
);

const moda = listaModificada[listaModificada.length - 1]; 

    const mensaje = document.getElementById("resultado-moda");
    mensaje.innerText = "La moda es: " + moda[0] +" el cual se repite " + moda[1] + " veces";
}


