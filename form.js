/* localStorage.setItem('user', JSON.stringify({

}
))

*/

const yourName = document.getElementById('userName');
const yourEmail = document.getElementById('userEmail');
const yourText = document.getElementById('userText');
const submitbtn = document.getElementById('submitbtn');
const form = document.querySelector('form');


function onSubmit(event) {
    event.preventDefault();
    // console.log('hola');


    const nameValue = yourName.value;
    const emailValue = yourEmail.value;
    const textValue = yourText.value;

    // console.log(firstNameValue);

    localStorage.setItem('userName', nameValue);
    localStorage.setItem('userEmail', emailValue);
    localStorage.setItem('userText', textValue);
}

submitbtn.addEventListener('click', onSubmit);

const data = JSON.parse(localStorage.getItem('userName'));

// form