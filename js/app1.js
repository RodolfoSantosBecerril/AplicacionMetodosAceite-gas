console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = (parseFloat(operandoA.value)*parseFloat(operandoA.value))-(parseFloat(operandoB.value)*parseFloat(operandoB.value));
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado} psi(²)`;
    console.log(`Resultado: ${resultado}`);
}
function sumar1(){
    const forma = document.getElementById('forma1');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let operandoC = forma['operandoC'];
    let operandoD = forma['operandoD'];
    let resultado = (Math.log10( parseFloat(operandoA.value) )- Math.log10( parseFloat(operandoB.value) ))/
    (Math.log10(parseFloat(operandoC.value) ) - Math.log10(parseFloat(operandoD.value) ));
 
    
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado1').innerHTML = `Resultado de valor de la pendiente m= ${resultado} `;
    console.log(`Resultado: ${resultado}`);
}
function sumar2(){
    const forma = document.getElementById('forma2');
    let operandoA = forma['operandoA'];
 
    let resultado =  1/parseFloat(operandoA.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado2').innerHTML = `Resultado: ${resultado} `;
    console.log(`Resultado: ${resultado}`);
}
function sumar3(){
    const forma = document.getElementById('forma3');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let operandoC = forma['operandoC'];
    let resultado =  parseFloat(operandoA.value)/(Math.pow( parseFloat(operandoB.value), parseFloat(operandoC.value)));
    if(isNaN(resultado))
        resultado = '¡Error! la operación no incluye números';
    document.getElementById('resultado3').innerHTML = `El valor de C es: ${resultado} `;
    console.log(`Resultado: ${resultado}`);
}
function sumar4(){
    const forma = document.getElementById('forma4');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let operandoC = forma['operandoC'];
    let resultado =  parseFloat(operandoA.value)*(Math.pow( parseFloat(operandoB.value), parseFloat(operandoC.value)));
    if(isNaN(resultado))
        resultado = '¡Error! la operación no incluye números';
    document.getElementById('resultado4').innerHTML = `El valor del gasto  es: ${resultado} [MPCD]`;
    console.log(`Resultado: ${resultado}`);
}