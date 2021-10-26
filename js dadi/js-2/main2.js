// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Generating a random number from 1 to 6:

const userNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;

// Let's show the winner: who has higher number wins

    if (userNumber > cpuNumber) {
        alert(`Il numero ${userNumber} è maggiore di ${cpuNumber} e quindi vince l'user!`);
    }
    else if (cpuNumber > userNumber) {
        alert(`Il numero ${cpuNumber} è maggiore di ${userNumber} e quindi vince la CPU!`);

    } else {
        alert("Non c'è nessun vincitore. Pareggio!");
    }
