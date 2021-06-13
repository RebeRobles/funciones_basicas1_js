/*1. Obtén del 1 al 255*/
var x = [ ];
for (var i = 0; i <= 255; i++){
    x.push (i);
}
console.log (x);

/*2. Consigue pares hasta 1000*/
function sumatoria (){
    var suma = 0;
    for (var i = 0; i <= 1000; i+=2){
        suma = suma + i;
    }
    return suma;
}
console.log (sumatoria());

/*3. Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999)*/
function sumatoriaImpares(){
    var suma = 0;
    for (var i = 1; i <= 5000; i++){
        if ((i%2)==1)
        suma = suma + i;
    }
    return suma;
}
console.log (sumatoriaImpares());

/*4. Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14)*/
function sumarray (array) {
    var suma = 0
    for (var i = 0; i < array.length; i++) {
        suma += array[i];    
    }
    return suma;
}
var array = [1,2,5]
console.log (sumarray(array) );

/*5.  Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7)*/
function mayorArray (array) {
    var mayor = array[0]
    for (var i = 1; i < array.length; i++) {
        if (array[i]>mayor) {
            mayor=array[i];
        };    
    }
    return mayor;
}
var array = [-3,3,5,7]
console.log (mayorArray(array) );

/*6. Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2)*/
function promedioArray (array) {
    var suma = 0
    for (var i = 0; i < array.length; i++) {
        suma += array[i];    
    }
    promedio = suma/array.length;
    return promedio;
}
var array = [1,3,5,7,20]
console.log (promedioArray(array) );

/*7. Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’*/
function imparesArray () {
    var array = []
    for (var i = 1; i <=50; i++) {
        if ((i%2)==1) {
            array.push(i);
        }    
    }
    return array;
}
console.log (imparesArray() );

/*8.  Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7)*/
function mayoresY(y, array) { 
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i]>y) {
            newArray.push(array[i]);
        };    
    }
    return newArray;
}
var y = 3
var array = [1,3,5,7]
console.log (mayoresY(y,array) );    

/*9 Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).*/
function cuadradoValor(array) { 
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i]*array[i];
    }
    return array;
}
var array = [1,5,10,-2]
console.log (cuadradoValor(array) );

/*10. Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0])*/
function reemplaceNeg (array) {
    var x = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i]<0) {
            array[i]=x;
        };    
    }
    return array;
}
var array = [1,5,10,-2]
console.log (reemplaceNeg(array));

/*11. Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).*/
function variosArray (array) {
    var mayor = array[0];
    var menor = array[0];
    var suma = 0;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]>mayor) {
            mayor=array[i];
        };
        if (array[i]<menor) {
            menor=array[i];
        };
        suma += array[i];   
    }
    promedio = suma/array.length;
    newArray.push(mayor);
    newArray.push(menor);
    newArray.push(promedio);
    return newArray;
}
var array = [1,5,10,-2]
console.log (variosArray(array) );

/*12. Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1])*/
function intercambioArray () {
    var x = array[array.length-1];
    array[array.length-1]=array[0];
    array[0]=x;
    return array;
}
var array = [1,5,10,-2]
console.log (intercambioArray() );

/*13. Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2]*/
function reemplaceDojo (array) {
    var x = "Dojo"
    for (var i = 0; i < array.length; i++) {
        if (array[i]<0) {
            array[i]=x;
        };    
    }
    return array;
}
var array = [-1,-3,2]
console.log (reemplaceDojo(array));