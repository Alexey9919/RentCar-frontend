//JS для страницы карточки клиента (Admin часть)

const queryClients = 'http://localhost:8080/clients/'
const cardClients = document.querySelector('#card_clients');
const buttonClientsDelete = document.querySelector('#form__btn-deleteClient');
const buttonClientsEdit = document.querySelector('#form__btn-editClient');
var foo = document.querySelector('#spanId');


//Получаем и выводим карточки авто

let idClient = localStorage.getItem("keyId");

fetch(queryClients + idClient).then((response) => {
    return response.json()
}).then((data) => {
    

    let idNumber = data.imageId; 
    const html = `

    <div class="card-admin">
    <img src="images/toretto.jpg" alt="" class="card__img-admin">
    <div class="card__content-card">
        <h4 class="card__title">${data.fullName}</h4>
        <p class="card__text-admin">Year of birth:     ${data.yearOfBirth}</p>
        <p class="card__text-admin">Passport:     ${data.passport}</p>
        <p class="card__text-admin">Contract number:     ${data.contractNumber}</p><br/>
        <p class="card__price">Mobile phone:     ${data.mobilePhone}</p><br/>
    </div>

</div>

`;

cardClients.insertAdjacentHTML('beforeend', html);

buttonClientsDelete.onclick = function() {
    fetch(String(queryClients + idClient), {
        method: 'DELETE', 
      });

      alert("Client removed!")
};

buttonClientsEdit.onclick = function() {
    window.location.href = 'admin-editClient.html'; 
};

}
);



