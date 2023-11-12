const queryCars = 'http://localhost:8080/cars/'
const cardCars = document.querySelector('#card_cars-edit');
const queryImages = 'http://localhost:8080/images/'

const models = document.querySelector('#editModel');
const colors = document.querySelector('#editColor');
const years = document.querySelector('#editYear');
const stateNumbers = document.querySelector('#editStateNumber');
// const rentalPeriods = document.querySelector('#editRentalPeriod');
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
  // document.querySelector('#editRentalPeriod').value = data.rentalPeriod;
  document.querySelector('#editBody').value = data.body;
  document.querySelector('#editPrice').value = data.price;
  document.querySelector('#images__cars-edit').src = String(queryImages + data.imageId);

//     const html = `

//     <form action="#" method="POST" enctype="multipart/form-data">
//                                 <input id="editModel" type="text" class="form__input" name="model" value="${data.model}"/>
//                                 <input id="editColor" type="text" class="form__input" name="color" value="${data.color}"/>
//                                 <input id="editYear" type="number" class="form__input" name="year" value="${data.year}"/>
//                                 <input id="editStateNumber" type="text" class="form__input" name="stateNumber" value="${data.stateNumber}"/>
//                                 <input id="editRentalPeriod" type="number" class="form__input" name="rentalPeriod" value="${data.rentalPeriod}"/>
//                                 <div class="form__input">
//                                     <p> <input id="editBody" type = "radio" name="body" value="1"/> Sedan</p>
//                                     <p> <input id="editBody" type = "radio" name="body" value="2"/> Crossover</p>
//                                     <p> <input id="editBody" type = "radio" name="body" value="3"/> Minivan</p>
//                                     <p> <input id="editBody" type = "radio" name="body" value="4"/> Electrificated</p>
//                                 </div>
//                                 <input id="editFile" type="file" class="file__newCar-admin" name="file" />
//                                 <button id="form__btn-editCarServer" class="form__btn" type="submit">Сохранить автомобиль</button>
//                             </form>
// `;


// cardCars.insertAdjacentHTML('afterbegin', html);

}
);
// console.log("Значения:", models, colors)
buttonEdit.onclick = function() {
    
  console.log("Значения:", models.value, colors.value)
  const url = String('http://localhost:8080/cars/update/' + idCar);
  const data = { model: models.value, color: colors.value, year: years.value, stateNumber: stateNumbers.value, body: bodys.value, price: prices.value};

  fetch(url, {
    method: 'PATCH', 
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      // 'Content-Type': 'multipart/form-data'
      'Content-Type': 'application/json'
    }
  });
  alert("Car saved!");
  // window.location.href = 'admin-cars.html';
  
} 


// async function sendContact(){
//   try {

      
//     const data = { model: models.value, color: colors.value, year: years.value, stateNumber: stateNumbers.value, rentalPeriod: rentalPeriods.value, body: bodys.value};

//       const response = await fetch(query, {
//         method: 'PATCH', 
//         body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const json = await response.json();
      
//     } catch (error) {
//       console.error('Ошибка:', error);
//     }
// }
// buttonEdit.onclick = function() {
// sendContact()
// };


// buttonEdit.onclick = function() {
    
//     const url = String('http://localhost:8080/cars/update/' + idCar);
//     console.log(models, colors)
//     const data = { model: models, color: colors, year: years, stateNumber: stateNumbers, rentalPeriod: rentalPeriods, body: bodys, file: files};

//     fetch(url, {
//       method: 'PATCH', 
//       body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         // 'Content-Type': 'application/json'
//       }
//     });
    
//   } 





