//JS для страницы карточки автомобиля (Admin часть)

const queryCars = 'http://localhost:8080/cars/'
const queryImages = 'http://localhost:8080/images/'
const queryClients = 'http://localhost:8080/clients'
const cardCars = document.querySelector('#card_cars');
const buttonCarsDelete = document.querySelector('#form__btn-deleteCar');
var foo = document.querySelector('#spanId');
const buttonEdit = document.querySelector('#form__btn-editCar');
const buttonPet = document.querySelector('#form__btn-pet');
const pet = document.querySelector('#pet-select');


function getNameOwner(id){
    fetch('http://localhost:8080/clients/' + id).then((response) => {
        return response.json()
    }).then((person) => {
    sessionStorage.clear
    sessionStorage.setItem('personName', person.fullName);
    });
}


//Получаем и выводим карточки авто

let idCar = localStorage.getItem("key");





fetch(queryCars + idCar).then((response) => {
    return response.json()
}).then((data) => {
    
    let strCarOccut = null;
if(data.idOwner == 0){
    strCarOccut = "Автомобиль свободен"
}
else{
    sessionStorage.clear
    getNameOwner(data.idOwner)
    strCarOccut = "Автомобиль сейчас у " + sessionStorage.getItem('personName')
    sessionStorage.clear
}


    let idNumber = data.imageId; 
    const html = `

    <div class="card-admin">
    <img src="${queryImages + idNumber} " alt="" class="card__img-admin">
    <div class="card__content-card">
        <h4 class="card__title">${data.model}</h4>
        <p class="card__text-admin">Year:     ${data.year}</p>
        <p class="card__text-admin">Color:     ${data.color}</p>
        <p class="card__text-admin">Rental Period:     ${data.rentalPeriod}</p>
        <p class="card__text-admin">Body:     ${data.body}</p>
        <p class="card__text-admin">State number:     ${data.stateNumber}</p>
        <p class="card__price">Price:     ${data.price} $/day</p>
        <p class="card__text-admin">Status:   ${strCarOccut}</p>
        <br/>
      
    </div>

</div>

`;

// buttonPet.onclick = function() {
//     console.log(pet)
// };


pet.addEventListener('change', function(){  
    var getId = this.value;
    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
    console.log( getId );

    const url = String('http://localhost:8080/cars/update/' + idCar);
  const dat = { model: data.model, color: data.color, year: data.year, stateNumber: data.stateNumber, body: data.body, price: data.price, idOwner: getId};

  fetch(url, {
    method: 'PATCH', 
    body: JSON.stringify(dat), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  });


  });


cardCars.insertAdjacentHTML('beforeend', html);



buttonCarsDelete.onclick = function() {
    console.log(queryCars + idCar)
    fetch(queryCars + idCar, {
        method: 'DELETE',
        // body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        // headers: {
        //   'Content-Type': 'application/json'
        // }
      });
   alert("Car removed!")
  
   
};

buttonEdit.onclick = function() {
    window.location.href = 'admin-editCar.html';
};



}
);











fetch(queryClients).then((response) => {
    return response.json()
}).then((data) => {
    

    for(let client of data) {
        console.log(client.id, client.fullName)
        const html2 = `
        
        <option value="${client.id}">${client.fullName}</option>

        `;
        pet.insertAdjacentHTML('beforeend', html2);
    }

   function getOwnerName() {
  return data.fullName
}



}
);





