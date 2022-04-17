
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
function perimetroCirculo (diametro, pi){
    return pi * diametro ;
}

function areaCirculo (radio, pi){
    return pi * (radio * radio) ;
}
