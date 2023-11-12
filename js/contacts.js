// JS для страницы с контактами (Пользовательская часть)

const form = document.querySelector('.form');
const input1 = document.querySelector('#inputName');
const input2 = document.querySelector('#inputNumber');
const input3 = document.querySelector('#inputText');
const btn = document.querySelector('.form__btn_contact');




// Слушаем отправку формы

form.onsubmit = function(e) {

    // Берем значение из импута, обрезаем пробелы
    let names = input1.value.trim();
    let numbers = input2.value.trim();
    let texts = input3.value.trim();

    async function sendContact(){
        try {
    
            const url = 'http://localhost:8080/contacts/new';
            const data = { nameClient: names, contactNumber: numbers, comment: texts };
    
            const response = await fetch(url, {
              method: 'POST', 
              body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const json = await response.json();
            
          } catch (error) {
            console.error('Ошибка:', error);
          }
    }

    sendContact()
}



