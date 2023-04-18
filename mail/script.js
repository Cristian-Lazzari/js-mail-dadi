// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
const mailList = [
    'aaaa@aaa.aaa',
    'bbbb@bbb.bbb',
    'cccc@ccc.ccc'
]
let check = false;
const mailUser = prompt('GET YOUR MAIL');
for (i = 0; i < mailList.length; i++){
    if (mailUser == mailList[i]){
        alert("your mail is correct");
        console.log(i);
        check = true;
    }
}
if (!check){
    alert("try again")
}