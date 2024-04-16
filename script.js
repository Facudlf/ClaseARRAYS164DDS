let autosAgencia = [
  { marca: 'Renault', modelo: 'Sandero', anio: 2022, precio: 19000000 },
  { marca: 'Chevrolet', modelo: 'Cruze', anio: 2019, precio: 23000000 },
  { marca: 'Citroen', modelo: 'C 3', anio: 2021, precio: 17000000 },
];

function mostrar() {
  //Mostrar los autos dentro de la tabla tblAutos
  let filas = '';
  autosAgencia.forEach(function (auto) {
    filas += `<tr>
    <td>${auto.marca}</td>
    <td>${auto.modelo}</td>
    <td>${auto.anio}</td>
    <td>${auto.precio}</td>
    <tr>`;
  });
  document.getElementById('tblAutos').innerHTML = filas;
}
