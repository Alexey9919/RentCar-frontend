//JS для станицы работы с клиентами (Admin часть)

const content1 = document.querySelector('#content-1');
const content2 = document.querySelector('#content-2');
const content3 = document.querySelector('#content-3');
const queryClients = 'http://localhost:8080/clients'

//Для поиска человека
const formSearch = document.querySelector('#formSearch');
const btnSearch = document.querySelector('#form__btn_search');
const inputSearch = document.querySelector('#inputSearch');



//Выводим людей и обрабатываем переход на страницу товара по клику
fetch(queryClients).then((response) => {
    return response.json()
}).then((data) => {
    


    for(let card of data){

    idNumber = card.imageId ;
        
    const html = `

    <div class="card">
    <img src="images/personAvto.jpg" alt="" class="card__img"> 
    <div class="card__content">
        <h4 class="card__title">${card.fullName}</h4>
        <p class="card__text">${card.yearOfBirth}</p>
        <p class="card__price">${card.mobilePhone}</p>
        <button id="c${card.id}" class="button-adminka"> See details </button>
    </div>
`;


content1.insertAdjacentHTML('beforeend', html);
}

});


fetch(queryClients).then((response) => {
    return response.json()
}).then((data) => {
    
   
    for(let card of data){
        let idCard = '#c' + card.id;
        document.querySelector(idCard).onclick = function() {
            localStorage.setItem("keyId", card.id);
            window.location.href = 'admin-cardClient.html';
        };

}
});



//Поиск человека


btnSearch.onclick = function() {
    formSearch.style.display = "none"
    let querySearch = String(queryClients + "/search/" + inputSearch.value)
   
    fetch(querySearch).then((response) => {
        return response.json()
    }).then((data) => {
        
    
    
        for(let card of data){
    
        idNumber = card.imageId ;
            
        const html = `
    
        <div class="card">
        <img src="images/makson.jpg" alt="" class="card__img"> 
        <div class="card__content">
            <h4 class="card__title">${card.fullName} ${card.yearOfBirth}</h4>
            <p class="card__text">${card.contractNumber}</p>
            <p class="card__price">${card.mobilePhone}</p>
            <button id="s${card.id}" class="button-adminka"> See details</button>
        </div>
    `;
    
    
    content3.insertAdjacentHTML('beforeend', html);
    }
    
    });


    fetch(querySearch).then((response) => {
        return response.json()
    }).then((data2) => {
        
       
        for(let card of data2){
            let idCard = '#s' + card.id;
            document.querySelector(idCard).onclick = function() {
                localStorage.setItem("keyId", card.id);
                window.location.href = 'admin-cardClient.html';
            };
    
    }
    });
    


};




