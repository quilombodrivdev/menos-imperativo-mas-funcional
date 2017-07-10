let facturas = [
    {name: "gas", valor: 200}, 
    {name: "luz", valor: 500}, 
    {name: "expensas", valor: 2500}, 
    {name: "abl", valor: 800}
]; 

// codigo imperativo
//let total = 0; 
//for(let i = 0 ; i < facturas.length ; i++){
    //let factura = facturas[i]; 
    //total += factura.valor;

//}
let total = facturas.reduce((acum, factura) =>acum + factura.valor,0);

console.log("total:", total);

