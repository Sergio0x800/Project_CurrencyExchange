function Mostrar_Fecha(){
    let obtener_fecha = new Date();
    let fecha = document.getElementById("fecha");
    fecha.innerHTML = obtener_fecha;
}

function Resultados(monto_entrada,moneda_entrada,resultado,moneda_salida) {
    let moneda_name = document.getElementById("moneda-name");
    let moneda_cantidad = document.getElementById("moneda-cantidad");
    moneda_name.innerHTML = `${monto_entrada} ${moneda_entrada} es igual a:`;
    moneda_cantidad.innerHTML =  `${resultado.toFixed(2)} ${moneda_salida}`;
}

function Convertir(){
    let moneda_entrada = document.getElementById("options-moneda__ingreso").value;
    let moneda_salida = document.getElementById("options-moneda__salida").value;
    let monto_entrada = document.getElementById("moneda_entrada").value;
    let monto_salida = document.getElementById("moneda_salida");
    let resultado = 0;

    if (moneda_entrada == "QTZ" && moneda_salida == "QTZ"){
        resultado = new Number(monto_entrada);
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Quetzales",resultado,"Quetzales");
    }
    else if (moneda_entrada == "QTZ" && moneda_salida == "USD"){
        resultado = monto_entrada/7.70;
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Quetzales",resultado,"Dolares");
    }
    else if (moneda_entrada == "QTZ" && moneda_salida == "EUR"){
        resultado = monto_entrada/9.36;
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Quetzales",resultado,"Euros");
    }



    else if (moneda_entrada == "USD" && moneda_salida == "USD"){
        resultado = new Number(monto_entrada);
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Dolares",resultado,"Dolares");
    }
    else if (moneda_entrada == "USD" && moneda_salida == "QTZ"){
        resultado = monto_entrada*7.70;
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Dolares",resultado,"Quetzales");
    }
    else if (moneda_entrada == "USD" && moneda_salida == "EUR"){
        resultado = monto_entrada/1.22;
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Dolares",resultado,"Euros");
    }



    else if (moneda_entrada == "EUR" && moneda_salida == "EUR"){
        resultado = new Number(monto_entrada);
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Euros",resultado,"Euros");
    }

    else if (moneda_entrada == "EUR" && moneda_salida == "QTZ"){
        resultado = monto_entrada/0.11;
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Euros",resultado,"Quetzales");
    }

    else if (moneda_entrada == "EUR" && moneda_salida == "USD"){
        resultado = monto_entrada*1.22;
        monto_salida.innerHTML = resultado.toFixed(2);
        Resultados(monto_entrada,"Euros",resultado,"Dolares");
    }
}

window.onload = setInterval(Convertir, 500),setInterval(Mostrar_Fecha, 500);