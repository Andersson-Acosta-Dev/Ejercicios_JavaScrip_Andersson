function ejercicio1(){
    var  PrimerNumero=0;
    var SegundoNumero=0;
    PrimerNumero=parseInt(prompt("Digite el primer número a calcular: "));
    SegundoNumero= parseInt(prompt("Digite el segundo número a calcular:"));
    alert("valor de la suma entre "+PrimerNumero+" y "+ SegundoNumero + " es: " +(PrimerNumero+SegundoNumero)+"\nvalor de la resta entre " +PrimerNumero+" y "+ SegundoNumero + " es: "+(PrimerNumero-SegundoNumero)+"\nvalor de la multiplicacion entre "  +PrimerNumero+" y "+ SegundoNumero + " es: "+(PrimerNumero*SegundoNumero)+"\nvalor de la Divicion entre "  +PrimerNumero+" y "+ SegundoNumero + " es: " +(PrimerNumero/SegundoNumero));
}
function ejercicio2(){
var primerNumero =0;
var segundoNumero=0;
primerNumero=parseInt(prompt("Ingrese el primer valor: "));
b=parseInt(prompt("Ingrese le segundo valor: "));
if(primerNumero>b){
alert(primerNumero+" es el numero mayor ")
}else{
    alert(b+" es el numero mayor")
}
}
function ejercicio3(){
    var a;
    var b;
    var c;
    a=parseInt(prompt("Ingrese el primer numero: "));
    b=parseInt(prompt("Ingrese el segundo numero: "));
    c=parseInt(prompt("Ingrese el tercer numero: "));
    if(a==b && b==c){
        alert("Los numeros digitados son iguales");
    }else if(a<b && a<c){
        alert("El numero menor es: "+a);
    }else if(b<a && b<c){
        alert("El numero menor es: "+b);
    }else{
        alert("El numero menor es: "+c);
    }
}
function ejercicio4(){
    var a ;
    a = parseInt(prompt("Ingrese el numero que desea saber si es par o impar: "));
    if(a%2==0){
        alert("El numero "+a+" es un numero par")
    }else{
        alert("El numero "+a+" es impar ")
    }
}
function ejercicio5(){
    var a ;
    var b ;
    a=parseInt(prompt("Ingrese el numero al que desea saber el: "));
    b = a*a;
    alert("El cuadrado del numero "+a+" es: "+b);
}
function ejercicio6(){
 var b=0 ;
 var h=0 ;
 var a=0 ;
 b=parseFloat(prompt("Ingrese la base del trinagulo: "));
 h=parseFloat(prompt("Ingrese la altura del trinagulo: "));   
 a=(b*h)/2;
 alert("El area del triangulo es: "+ a);
}
function ejercicio7(){
    var m ;
    var b ;
    m=parseFloat(prompt("Ingrese el valor en metros: "));
    c=m*100;
    alert("El valor de "+m+"m en centimetros es: "+c+"cm");
}
function ejercicio8(){
    var a ;
    var b ;
    a=parseInt(prompt("Ingrese su edad: "));
    b=2022 -a ;
    alert("Usted nacio en el año: "+b)
}
function ejercicio9(){
 var ca;
 var a;
 var ia;
 var it;
 var t;
 ca=parseInt(prompt("Ingrese el valor del capital a invertir"));
 a=parseInt(prompt("Ingrese el numero de años que desea dejar el capital"));
    ia=(ca*0.02)*12
    it=ia*a
    t=it+ca
 alert("usted invirtio un capital de: $"+ca+"\nEl valor de interes que gano es de: $"+it+"\nSu capital despues de la invercion es de: $"+t);
}
function ejercicio10(){
    var ca1;
    var ca2;
    var ca3;
    var ca4;
    var ca5;
    var op;
    ca1=parseInt(prompt("Ingrese la primera calificacion: "));
    ca2=parseInt(prompt("Ingrese la segunda calificacion: "));
    ca3=parseInt(prompt("Ingrese la tercera calificacion: "));
    ca4=parseInt(prompt("Ingrese la cuarta calificacion: "));
    ca5=parseInt(prompt("Ingrese la quinta calificacion: "));
    promedio= (ca1+ca2+ca3+ca4+ca5)/5;
    if(promedio<=2.9)
    {alert("El alumno reprovo con: "+promedio);
    }else if (promedio>=3){
        alert("El alumno aprovo con: "+promedio);
    }else{
        alert("los valores digitados fueron Erroneos")
    }
}
function ejercicio11(){
    var kg;
    var de ;
    var tf ;
    var tc;
    kg=parseFloat(prompt("Ingrese el numero de kilos comprados"));
    tf=kg*4500;
    if(kg<=2){
        alert("No tiene descuento el valor a pagar por el cliente es: "+tf);
    }else if(kg>=3 && kg <=5){
        de=tf*0.1;
        tp=tf-de;
        alert("El cliente compró: "+kg+"kg \nTiene descuento de $"+de+"\n el valor a pagar por el cliente es de: $"+tp);
    }else if (kg>=6 && kg<=10){
        de=tf*0.15;
        tp=tf-de;
        alert("El cliente compró: "+kg+"kg \nTiene descuento de $"+de+"\n el valor a pagar por el cliente es de: $"+tp);
    }else if (kg>=10){
        de=tf*0.2;
        tp=tf-de;
        alert("El cliente compró: "+kg+"kg \nTiene descuento de $"+de+"\n el valor a pagar por el cliente es de: $"+tp);
    }
}
