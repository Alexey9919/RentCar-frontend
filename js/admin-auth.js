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


// form.onsubmit = function(e) {

//     // Берем значение из импута, обрезаем пробелы
    
//     let emails = input1.value.trim();
//     let passwords = input2.value.trim();
 
//     console.log(emails, passwords)
//     window.location.href = 'admin-cars.html';



//     // async function sendContact(){
//     //     try {
    
//     //         const url = 'http://localhost:8080/process_login';
//     //         const data = { username: emails, password: passwords};
    
//     //         const response = await fetch(url, {
//     //           method: 'POST', 
//     //           body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//     //           headers: {
//     //             'Content-Type': 'application/json'
//     //           }
//     //         });
//     //         const json = await response.json();
            
//     //       } catch (error) {
//     //         console.error('Ошибка:', error);
//     //       }
//     // }

//     // sendContact()

// }

// // if(emails == 'admin' && passwords == 123){
// //     window.location.href = 'admin-cars.html';
// // }


