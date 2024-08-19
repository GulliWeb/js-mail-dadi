// GENERO NUMERO RANDOM DA 1 A 6 SIA PER CHE CHE PER IL COMPUTER, VINCE CHI HA IL PUNTEGGIO PIU' ALTO
let myNumber 
let pcNumber 

// Genero mio numero casuale e stampo in pagina
function Play(params) {

myNumber = Math.floor(Math.random() * 6) + 1
console.log(myNumber)

// Genero numero casuale pc
pcNumber = Math.floor(Math.random() * 6) + 1
console.log(pcNumber)

// Verifico quale dei due è maggiore per stabilire chi ha vinto
let message = ''

if (myNumber > pcNumber) {
    message = `Hai vinto! il tuo numero ( ${myNumber} ) è maggiore del numero del pc ( ${pcNumber} )`
} else if(myNumber < pcNumber) {
    message = `Hai perso! il tuo numero ( ${myNumber} ) è minore del numero del pc ( ${pcNumber} ) RITENTA, SARAI PIU' FORTUNATO :)`
} else if(myNumber == pcNumber ) {
    message = ` Pareggio! i vostri numeri sono uguali.`
}
console.log(message)

// Stampo in pagina
let userNumber = document.getElementById('myNumber')
userNumber.innerText = 'Il tuo numero:' + myNumber

let consoleNumber = document.getElementById('pcNumber')
consoleNumber.innerText = 'Numero Pc: ' + pcNumber

let result = document.getElementById('result')
result.innerText = message
}

// ----------------------------- 
// ES 2

// Creo lista di email autorizzare
let emails = ['andreagulli1@gmail.com', 'andreagulli2@gmail.com', 'andreagulli3@gmail.com']

// Controllo email utente 


function Login() {
    let userMail = document.getElementById('txtMail').value
    console.log(userMail)

    if (userMail === '') {
        alert('Attenzione! inserire una mail!') 
        return
    }

    // Controllo email se è autorizzata //
    let loginMessage = 'Email non autorizzata! Riprova.'

    for (let i = 0; i < emails.length; i++) {
        console.table(emails[i])
      if (userMail == emails[i]) {
       loginMessage = 'Email autorizzata!' }
      }

      let loginRes = document.getElementById('login-result')
      loginRes.innerText = loginMessage
    }
    
      

    





