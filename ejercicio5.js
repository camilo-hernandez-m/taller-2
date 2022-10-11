addEventListener("DOMContentLoaded", ()=>{

    //Un obrero compra ¿cuanto dinero tenia antes de la compra?
    //juego de llaves hexagonales fueron 5 cada uno a 11.500
    //una bomba en 1.168.000
    //tres cajas de pernos cada uno por 87.000
    //sobran 91.000
    //Datos de entrada
    let juegllavh=57500
    let bomb=1168000
    let cjper=261000
    let sobrante=91000
    
    //procesos
    
    let gasto=float(juegllavh+bomb+cjper)
    let totalg=float(sobrante+gasto)
    let sobrantef=float(totalg-gasto)
    
    //entrega de resultados
    console.log("total del gasto fue: ",gasto)
    console.log(" obrero tenia antes del gasto un total de: ",totalg)
    console.log(" quedo un sobrante de: ",sobrantef)
})