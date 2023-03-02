"use strict";
exports.__esModule = true;
var frota_1 = require("./frota");
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter(function (carro) {
        return carro.marca === marca;
    });
}
console.log(buscarCarrosPorMarca(frota_1.frota, "Fiat"));
