console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let operandoC = forma['operandoC'];
    let resultado =  
    parseFloat(operandoC.value)/(((1-0.2*(parseFloat(operandoA.value)/ parseFloat(operandoB.value))))-((0.8)*(Math.pow(parseFloat(operandoA.value)/(parseFloat(operandoB.value)), 2)))); 
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `El gasto máximo es: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
    return resultado;
}
//---------------------------------------------------------------------------------------------------GRAFICADORA

function sumar1(){
    const forma1 = document.getElementById('forma1');
    let operandoA = forma1['operandoA'];
    let operandoB = forma1['operandoB'];
    let operandoC = forma1['operandoC'];
    let resultado1 =
    parseFloat(operandoC.value)*(((1-0.2*(parseFloat(operandoA.value)/ parseFloat(operandoB.value))))-((0.8)*(Math.pow(parseFloat(operandoA.value)/(parseFloat(operandoB.value)), 2)))); 
    if(isNaN(resultado1)) 
        resultado1 = 'La operación no incluye números';
    
    document.getElementById('resultado1').innerHTML = `El gasto máximo en la profundidad propesta es: ${resultado1}`;
    console.log(`Resultado: ${resultado1}`);
   

    return  resultado1;

}
//---------------------------------------------------------------------------------------------------GRAFICADORA

function sumar3(){
    const forma3 = document.getElementById('forma3');
    
    let paresalerta =parseFloat(prompt(`Ingresa el intervalo de la presión: `));
    let operandoA = parseFloat(prompt(`Ingresa PWS: `));
    
    let pares = [];
    
    if (isNaN(paresalerta)) {
    
      alert('Debes introducir un valor');
    }
    if(isNaN(operandoA)){
        alert('Debes introducir un numero valido');
    }
    console.log(paresalerta, operandoA)
        paresalerta + paresalerta
        var suma = operandoA + operandoA
        console.log(paresalerta, suma)
    if(paresalerta<=operandoA){
        for (var i = 0; i<= operandoA; i+=paresalerta)
        {   

            pares.push(i) ;
        }
    }
   
    document.getElementById('salida').innerHTML = pares;
    console.log('funciona');
}
//---------------------------------------------------------------------------------------------------GRAFICADORA
      //      i=parseFloat(operandoC.value)*(((1-0.2*(parseFloat(paresalerta)/ parseFloat(operandoA))))-((0.8)*(Math.pow(parseFloat(paresalerta)/(parseFloat(operandoA)), 2)))); 
   
function sumar4(){
 //   const forma4 = document.getElementById('forma4');
    
 //////
   let operandoC = parseFloat(prompt(`Ingresa el gasto máximo: `)); 
   let paresalerta =parseFloat(prompt(`Ingresa el intervalo de la presión: `));
   let operandoA = parseFloat(prompt(`Ingresa PWS: `));
   
   let pares = [];
   let res =[];
   if (isNaN(paresalerta)) {
   
     alert('Debes introducir un valor');
   }
   if(isNaN(operandoA)){
       alert('Debes introducir un numero valido');
   }
    
   if(paresalerta<=operandoA){
       for (var i = 0; i<= operandoA; i+=paresalerta)
       {   
          resultado=parseFloat(operandoC)*(((1-0.2*(parseFloat(i)/ parseFloat(operandoA))))-((0.8)*(Math.pow(parseFloat(i)/(parseFloat(operandoA)), 2)))); 
   
           pares.push(i) ;
         res.push(resultado);
       }
   }

  

   document.getElementById('salida1').innerHTML = pares;
   document.getElementById('salida2').innerHTML = res;
   console.log('funciona');

   const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
let etiquetas = document.getElementById('salida1').innerHTML = pares;  // GASTO SALIDA 2
// Podemos tener varios conjuntos de datos
let datosVentas2020 = {
    label: "Curvas IPR",
    data:document.getElementById('salida2').innerHTML = res , // PROFUNDIDAD SALIDA 1 La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
/*
const datosVentas2021 = {
    label: "Ventas por mes - 2021",
    data: [10000, 1700, 5000, 5989], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};
*/
new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
        //    datosVentas2021,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
}

 
    
 
 

//---------------------------------------------------------------------------------------------------GRAFICADORA
// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
let etiquetas = ["0", "500", "1000", "1500", "2000", "2500", "3000", "3500"] // GASTO SALIDA 2
// Podemos tener varios conjuntos de datos
let datosVentas2020 = {
    label: "Curvas IPR",
    data:[ ], // "3500", "3000", "2500", "2000", "1500","1000", "500","0"  PROFUNDIDAD SALIDA 1 La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
    borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
/*
const datosVentas2021 = {
    label: "Ventas por mes - 2021",
    data: [10000, 1700, 5000, 5989], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
    borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};
*/
new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2020,
        //    datosVentas2021,
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});