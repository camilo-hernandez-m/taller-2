addEventListener("DOMContentLoaded", ()=>{

    // DISTANCIA ENTRE  PUNTOS
    //DATOS DE ENTRADA
    let d= rc((x2-x1)**2+(y2-y1)**2)
    let x1=Number(prompt("la primera distancia x "));
    let x2=Number(prompt("la segunda distancia x ")); 
    let y1=Number(prompt("la primera distancia y "));
    let y2=Number(prompt("la segunda distancia y "));
    
    //procesos
    let dist=sqrt((x2-x1)**2+(y2-y1)**2);
    //nose como importar librerias a javascript
    // entrega de resultados
    console.log(" distancia de los puntos es ",dist);
})