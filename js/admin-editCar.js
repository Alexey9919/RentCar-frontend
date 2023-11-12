const queryCars = 'http://localhost:8080/cars/'
const cardCars = document.querySelector('#card_cars-edit');
const queryImages = 'http://localhost:8080/images/'

const models = document.querySelector('#editModel');
const colors = document.querySelector('#editColor');
const years = document.querySelector('#editYear');
const stateNumbers = document.querySelector('#editStateNumber');
const bodys = document.querySelector('#editBody');
const prices = document.querySelector('#editPrice');
const formEdit = document.querySelector('#admin__form-editCar')


// document.getElementById('variable').innerHTML = variable;


const buttonEdit = document.querySelector('#form__btn-editCarServer');

let idCar = localStorage.getItem("key");


let query = String(queryCars + "update/" + idCar)

fetch(queryCars + idCar).then((response) => {
    return response.json()
}).then((data) => {

  document.querySelector('#editModel').value = data.model;
  document.querySelector('#editColor').value = data.color;
  document.querySelector('#editYear').value = data.year;
  document.querySelector('#editStateNumber').value = data.stateNumber;
  document.querySelector('#editBody').value = data.body;
  document.querySelector('#editPrice').value = data.price;
  document.querySelector('#images__cars-edit').src = String(queryImages + data.imageId);


}
);
buttonEdit.onclick = function() {
    
  console.log("Значения:", models.value, colors.value)
  const url = String('http://localhost:8080/cars/update/' + idCar);
  const data = { model: models.value, color: colors.value, year: years.value, stateNumber: stateNumbers.value, body: bodys.value, price: prices.value};

  fetch(url, {
    method: 'PATCH', 
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  alert("Car saved!");
} 

