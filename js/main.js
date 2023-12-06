function calcularPrestamo() {
    // Obtener las entradas del usuario
    let montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo ($):"));
    let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
    let plazoPrestamo = parseFloat(prompt("Ingrese el plazo del préstamo en años:"));

    // Validar las entradas
    if (isNaN(montoPrestamo) || isNaN(tasaInteres) || isNaN(plazoPrestamo) || montoPrestamo <= 0 || tasaInteres <= 0 || plazoPrestamo <= 0) {
    alert("Por favor, ingrese números positivos válidos en todos los campos.");
    return;
    }

    // Calcular la tasa de interés mensual y el número de pagos
    let tasaInteresMensual = (tasaInteres / 100) / 12;
    let numeroPagos = plazoPrestamo * 12;

    // Calcular el pago mensual
    let pagoMensual = (montoPrestamo * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -numeroPagos));
    let totalPagar = pagoMensual * numeroPagos;
    let totalIntereses = totalPagar - montoPrestamo;

    // Mostrar los resultados en la página HTML
    let resultadosHTML = "<h2>Detalles del Préstamo</h2>" +
    "<p>Pago Mensual: $" + pagoMensual.toFixed(2) + "</p>" +
    "<p>Total a Pagar: $" + totalPagar.toFixed(2) + "</p>" +
    "<p>Total de Intereses: $" + totalIntereses.toFixed(2) + "</p>";

    document.body.innerHTML += resultadosHTML;
}