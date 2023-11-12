//JS для станицы работы с автомобилями (Admin часть)

const content1 = document.querySelector('#content-1');
const content2 = document.querySelector('#content-2');
const content3 = document.querySelector('#content-3');
const queryCars = 'http://localhost:8080/cars'
const queryImages = 'http://localhost:8080/images/'

//Для поиска нового авто
const formSearch = document.querySelector('#formSearch');
const btnSearch = document.querySelector('#form__btn_search');
const inputSearch = document.querySelector('#inputSearch');



//Выводим автомобили и обрабатываем переход на страницу товара по клику
fetch(queryCars).then((response) => {
    return response.json()
}).then((data) => {
    


    for(let card of data){

    idNumber = card.imageId ;
        
    const html = `

    <div class="card">
    <img src="${queryImages + idNumber} " alt="" class="card__img"> 
    <div class="card__content">
        <h4 class="card__title">${card.model} ${card.year}</h4>
        <p class="card__text">${card.color}</p>
        <p class="card__price">${card.price} $/day</p>
        <button id="d${card.id}" class="button-adminka"> See details </button>
    </div>
`;


content1.insertAdjacentHTML('beforeend', html);
}

});


fetch(queryCars).then((response) => {
    return response.json()
}).then((data) => {
    
   
    for(let card of data){
        let idCard = '#d' + card.id;
        document.querySelector(idCard).onclick = function() {
            localStorage.setItem("key", card.id);
            window.location.href = 'admin-cardCar.html';
        };

}
});



//Поиск авто


btnSearch.onclick = function() {
    formSearch.style.display = "none"
    let querySearch = String(queryCars + "/search/" + inputSearch.value)
   
    fetch(querySearch).then((response) => {
        return response.json()
    }).then((data) => {
        
    
    
        for(let card of data){
    
        idNumber = card.imageId ;
            
        const html = `
    
        <div class="card">
        <img src="${queryImages + idNumber} " alt="" class="card__img"> 
        <div class="card__content">
            <h4 class="card__title">${card.model} ${card.year}</h4>
            <p class="card__text">${card.color}</p>
            <p class="card__price">${card.price} $/day</p>
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
                localStorage.setItem("key", card.id);
                window.location.href = 'admin-cardCar.html';
            };
    
    }
    });
    


};


















