//JS для станицы работы с автомобилями (Admin часть)

const content1 = document.querySelector('#content-callRequests');
const queryCars = 'http://localhost:8080/contacts'




//Выводим автомобили и обрабатываем переход на страницу товара по клику
fetch(queryCars).then((response) => {
    return response.json()
}).then((data) => {
    

    for(let card of data){

        let strData = String(card.applicationTime).substr(0, 10)

    const html = `

    
    <div class="card__contenthh">
        <h4 class="card__title">Name:   ${card.nameClient}</h4>
        <p class="card__text">Contact number:   ${card.contactNumber}</p>
        <p class="card__text">Comment:   ${card.comment}</p>
        <p class="card__text">Data:   ${strData}</p>
    </div>
`;

content1.insertAdjacentHTML('beforeend', html);
}

});

