//JS для общей страницы с автомобилями (Пользовательская часть)

const type1 = document.querySelector('#content-1');
const type2 = document.querySelector('#content-2');
const type3 = document.querySelector('#content-3');
const type4 = document.querySelector('#content-4');
const queryCars = 'http://localhost:8080/cars'
const queryImages = 'http://localhost:8080/images/'


//Получаем и выводим карточки авто

fetch(queryCars).then((response) => {
    return response.json()
}).then((data) => {
    

for(let card of data){
    let idNumber = card.imageId; 
    let bodyNumber = card.body;
    const html = `

    <div class="card">
    <img src="${queryImages + idNumber} " alt="" class="card__img">
    <div class="card__content">
        <h4 class="card__title">${card.model} ${card.year}</h4>
        <p class="card__text">${card.color}</p>
        <p class="card__price">${card.stateNumber}</p>
    </div>
    <a href="" class="card__link">See details</a>
</div>

`;

if (bodyNumber === 1) 
type1.insertAdjacentHTML('beforeend', html);

if (bodyNumber === 2) 
type2.insertAdjacentHTML('beforeend', html);

if (bodyNumber === 3) 
type3.insertAdjacentHTML('beforeend', html);

if (bodyNumber === 4) 
type4.insertAdjacentHTML('beforeend', html);

}

});