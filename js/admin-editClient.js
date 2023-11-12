const queryClients = 'http://localhost:8080/clients/'
const cardClients = document.querySelector('#card_clients-edit');

const fullNames = document.querySelector('#editFullName');
const yearOfBirths = document.querySelector('#editYearOfBirth');
const passports = document.querySelector('#editPassport');
const contractNumbers = document.querySelector('#editContractNumber');
const mobilePhones = document.querySelector('#editMobilePhone');


// document.getElementById('variable').innerHTML = variable;


const buttonEdit = document.querySelector('#form__btn-editClientServer');

let idClient = localStorage.getItem("keyId");


let query = String(queryClients + "update/" + idClient)

fetch(queryClients + idClient).then((response) => {
    return response.json()
}).then((data) => {

  document.querySelector('#editFullName').value = data.fullName;
  document.querySelector('#editYearOfBirth').value = data.yearOfBirth;
  document.querySelector('#editPassport').value = data.passport;
  document.querySelector('#editContractNumber').value = data.contractNumber;
  document.querySelector('#editMobilePhone').value = data.mobilePhone;
  document.querySelector('#images__cars-edit').src = "images/toretto.jpg";
  

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
    
  console.log("Значения:", fullNames.value, yearOfBirths.value)
  const url = String('http://localhost:8080/clients/update/' + idClient);
  const data = { fullName: fullNames.value, yearOfBirth: yearOfBirths.value, passport: passports.value, contractNumber: contractNumbers.value, mobilePhone: mobilePhones.value};

  fetch(url, {
    method: 'PATCH', 
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      // 'Content-Type': 'multipart/form-data'
      'Content-Type': 'application/json'
    }
  });
  alert("Client saved!");
  // window.location.href = 'admin-cars.html';
  
} 