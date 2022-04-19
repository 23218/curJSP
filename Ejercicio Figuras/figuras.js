
console.log("funciona");
/*
//cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4 ;
console.log("perimetro = " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado ;
console.log("area = " + areaCuadrado + "cm^2");
console.groupEnd();


//triangulo
console.group("Triangulo");
const lado1  = 6; 
const lado2  = 6; 
const lado3  = 4; 
const altura = 8;

console.log("los datos del triangulo miden: " +  lado1 + "cm, "+  lado2 + "cm, "+  lado3 + "cm, " + "altura: "+ altura + "cm" );

const areaTriangulo = (lado3 * altura) / 2;
console.log("Area del triangulo: " + areaTriangulo);

const perimetroTriangulo = lado1 * lado2 * lado3 ;
console.log("Perimetro del triangulo: " + perimetroTriangulo);
console.groupEnd();


//Circulo 
console.group("Circulo");

const pi = Math.PI;
const radio = 5;

console.log("pi: " + pi + ", radio: " + radio);

const perimetroCirculo =  (pi * (radio * 2));
console.log("Perimetro del circulo: " + perimetroCirculo);

const areaCirculo = (pi * (radio * radio));
console.log("Area del circulo: " + areaCirculo)
console.groupEnd();

*/



// FUGURAS POR MEDIO DE FUNCIONES

//cuadrado
function perimetroCuadrado (lado){
    return lado*4;
}

function areaCuadrado (lado){
    return lado * lado;
}

//triangulo
function perimetroTriangulo (lado1,lado2,lado3){
    return lado1 * lado2 * lado3;
}
function areaTriangulo (base,altura){
    return (base * altura ) / 2;
}

//circulo
function perimetroCirculo (radio){
    return Math.PI * (radio * 2) ;
}

function areaCirculo (radio){
    return Math.PI * (radio * radio) ;
}




//FUNCIONES DIRECTAS A HTML

function calcPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("el perimetro del cuadrado es:  " + perimetro);
}
function calcAreaCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("el area del cuadrado es:  " + area); 
}

function calcPerimetroTriangulo(){
    const inputiz = document.getElementById("inputIz");
    const inputde = document.getElementById("inputDe");
    const inputba = document.getElementById("inputBa");
    const perimetro = perimetroTriangulo(inputiz.value, inputde.value,inputba.value);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcAreaTriangulo(){
    const inputba = document.getElementById("inputBa");
    const inputal = document.getElementById("inputAl");
    const area = areaTriangulo(inputba.value, inputal.value);
    alert("El area del triangulo es: " + area);
}

function calcPerimetroCirculo (){
    const inputra = document.getElementById("inputCi");
    const perimetro = perimetroCirculo(inputra.value);
    alert("El perimetro del circulo es: "+ perimetro);
}

function calcAreaCirculo (){
    const inputra = document.getElementById("inputCi");
    const area = areaCirculo(inputra.value);
    alert("El area del circulo es: " + area);
}