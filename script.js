//SNACK 1

//Array con nomi di invitati
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 
    'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 
    'Fedez', 'Amadeus', 'Fiorello'];
//Nome del Tavolo
const tableName = 'Tavolo VIP';

//Creo un array di oggetti in cui ogni oggetto rappresenta un invitato con il suo nome, tavolo e posto assegnato
const guestsTable = guests.map((guest, i) => {
    return {
        tableName: tableName,
        guestName: guest,
        place: i+1
    }
});

console.log(guestsTable);