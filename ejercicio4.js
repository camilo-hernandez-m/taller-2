addEventListener("DOMContentLoaded", ()=>{

    // Q(caudal), V(volumen), T(tiempo)
// Q=V/T, V=pi*(radio**2)*H(altura del deposito)
// tiempo se encuentra en minutos , se mide en seg y el volumen en lit 
//Datos de entrada
let Lrg=Number(prompt("ingrese el largo del deposito: "))
let anch=Number(prompt("ingrese el ancho del deposito: "))
let H=Number(prompt("ingrese el alto del deposito: "))
let Radio=Number(prompt("ingrese el radio del deposito"))
let pi=3.14
let rapidez=1.6

//procesos
  
let Volumn=(Lrg*anch*H)
let Area=(pi*Radio**2)
let Tiem=(Volumn/rapidez)*Area
let Q=(Volumn/Tiem)

//salida y entrega de resultados
console.log("El tiempo estimado para el relleno del deposito es de: ",Q,"minutos")
})