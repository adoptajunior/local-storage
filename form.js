/* localStorage.setItem('user', JSON.stringify({

}
))

*/

const yourName = document.getElementById('name');
const yourEmail = document.getElementById('email');
const yourText = document.getElementById('text');
const submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener('click', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log('hola');


    const nameValue = yourName.value;
    const emailValue = yourEmail.value;
    const textValue = yourText.value;

    // console.log(firstNameValue);

    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('text', textValue);
}