const queryClients = 'http://localhost:8080/clients/'
const cardClients = document.querySelector('#card_clients-edit');

const fullNames = document.querySelector('#editFullName');
const yearOfBirths = document.querySelector('#editYearOfBirth');
const passports = document.querySelector('#editPassport');
const contractNumbers = document.querySelector('#editContractNumber');
const mobilePhones = document.querySelector('#editMobilePhone');



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
  
}
);
buttonEdit.onclick = function() {
    
  console.log("Значения:", fullNames.value, yearOfBirths.value)
  const url = String('http://localhost:8080/clients/update/' + idClient);
  const data = { fullName: fullNames.value, yearOfBirth: yearOfBirths.value, passport: passports.value, contractNumber: contractNumbers.value, mobilePhone: mobilePhones.value};

  fetch(url, {
    method: 'PATCH', 
    body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  });
  alert("Client saved!");
} 