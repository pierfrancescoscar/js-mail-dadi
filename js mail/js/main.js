// Mail
// - crea una lista contenente almeno 3 indirizzi email
// - chiedi all’utente la sua email,
// - controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
// - stampa un messaggio appropriato sull’esito del controllo.

// Ref
const mailList = ['pierfrancesco@gmail.com', 'scarinci@gmail.com', 'pierfrancescoscarinci@gmail.com'];
const mailInput = document.getElementById('mail');
const checkBtn = document.querySelector('.checkBtn')
const output = document.querySelector('.output');


// Ask user's mail and check if the user's mail is in our list

checkBtn.addEventListener('click', function() {

    // Ask user's mail
    const user = mailInput.value.trim().toLowerCase();
    console.log(user);

    // Check if the input is empty
    if (user === '') {
        alert('Please, enter your e-mail')
    } else {

    // Check if the user's mail is in our list
    let mailFound = false; // flag

    for (let i=0; i < mailList.length; i++) {
        if (mailList[i] === user) {
            mailFound = true;
            break;
        }
    }

    console.log(mailFound);

    // Output 
    if (mailFound) {
        output.innerHTML = 'Okay, your mail is in our list :)'
    } else {
        output.innerHTML = 'Sorry, your mail is not in our list. Please, try with another mail.'
}
}
})

