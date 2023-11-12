// JS для страницы с контактами (Пользовательская часть)

const form = document.querySelector('.form');
const input1 = document.querySelector('#inputEmail');
const input2 = document.querySelector('#inputPassword');
const btn = document.querySelector('#form__btn_login');




// Слушаем отправку формы



btn.onclick = function() {
    let emails = input1.value.trim();
    let passwords = input2.value.trim();
 
    console.log(emails, passwords)
    if(emails == 'admin' && passwords == 123){
        window.location.href = 'admin-cars.html';
    }

};