addEventListener("DOMContentLoaded", ()=>{
//:Pablo compro 5 productos con diferente descuento 
// 2 primeros de 5% ylos dos ultimos de 2%
let p1=60
let p2=70
let p3=4
let p4=3
let p5=5
let des1=0.05
let des2=0.02
//procesos

let dosprimeros=Number((p1+p2)*des1);
let dosultm=Number((p4+p5)*des2);
let sumades=Number(dosprimeros+dosultm);
let total=Number(p1+p2+p3+p4+p5-sumades);

//salida de datos

console.log("valor de descuento de los 2 primeros es ",dosprimeros);
console.log("valor del descuento de los 2 ultimos es ",dosultm);
console.log("valor total de la compra es ",total);
})