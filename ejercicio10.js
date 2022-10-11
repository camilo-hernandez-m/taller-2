addEventListener("DOMContentLoaded", ()=>{
    // empresa quiere determinar la edad de las personas
    //solo se les pregunta el año de nacimiento
    //Datos de entrada
    let Nac=Number(prompt("Ingresa tu año de nacimiento:"))
    let act=Number(prompt("Ingresa el año actual:"))
    
    //procesos
    let edad=(act-Nac)
    
    //Salida o entrega de resultados
    console.log("Tu edad es de:",edad,"años")

})