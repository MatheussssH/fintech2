const fila = ["Luiz", "Ana", "Roberta"];

console.log("Fila atual: " + fila);

while (fila.length > 0) {
    console.log("Atendendo o cliente: " + fila[0]);
    fila.shift();
}

console.log("Fim da fila");