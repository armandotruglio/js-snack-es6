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


// # SNACK 2

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
]

/* Creo 3 Array
1. Array di nomi di tutti gli Studenti
2. Array di studenti con somma dei voti > 70
3. Array di studenti con somma dei voti > 70 e ID > 120 */


/* 
Uso il metodo REDUCE creando un accumulatore come un array contentente altri 3 array.
Ogni array dell'accumulatore corrsiponderà all'array richiesto sopra
*/

const [studentsNames, over70GradesStudents, selectedStudents] = students.reduce((acc, student) => {
    //Inserisco il nome dello studente nel primo array
    acc[0].push(student.name.toUpperCase());
    //Se la somma dei voti dello studente è > 70 lo inserisco nel secondo array
    if(student.grades > 70){
        acc[1].push(student);
        //Se anche l'ID è > 120 allora lo inserisco anche nel terzo array
        if(student.id > 120) acc[2].push(student);
    }

    return acc;
}, [[], [], []]);

console.log(studentsNames, over70GradesStudents, selectedStudents);

//SNACK 3

//Creo un array di ogetti con le bici
const bikes = [
    {
        name : 'Bianchi',
        weight: 8
    },
    {
        name : 'Colnago',
        weight: 7.2
    },
    {
        name : 'BMC',
        weight: 7.9
    },
    {
        name : 'Pinarello',
        weight: 7.3
    },
    {
        name : 'Cervelo',
        weight: 7.5
    },
]

//Trovo la bici dal peso minore e memorizzo, tramite destructuring, il nome e il peso relativi in due variabili

const lighterBike = bikes.reduce((acc, bike) => {
    if(acc.weight > bike.weight || acc.weight == 0) acc = bike;
    return acc;
},({name: '', weight: 0}))


console.log(`La marca di bici più leggera della lista è la ${lighterBike.name} e pesa ${lighterBike.weight}kg`);

//SNACK 4

//Creo un array di oggetti con le squadre
const teams = [
    {
        name : 'Juventus',
        points : 0,
        fouls: 0
    },
    {
        name : 'Milan',
        points : 0,
        fouls: 0
    },
    {
        name : 'Inter',
        points : 0,
        fouls: 0
    },
    {
        name : 'Napoli',
        points : 0,
        fouls: 0
    },
    {
        name : 'Atalanta',
        points : 0,
        fouls: 0
    },
    {
        name : 'Roma',
        points : 0,
        fouls: 0
    },
    {
        name : 'Lazio',
        points : 0,
        fouls: 0
    },
    {
        name : 'Bologna',
        points : 0,
        fouls: 0
    },
    {
        name : 'Fiorentina',
        points : 0,
        fouls: 0
    },
    {
        name : 'Torino',
        points : 0,
        fouls: 0
    },
]

//Funzione di generazione di numeri casuali

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

//Assegno ad ogni squadra dei punti e dei falli subiti casuali

teams.forEach(team => {
    team.points = getRandomNumber(0,100);
    team.fouls = getRandomNumber(0,100);
})

//Creo un array che contiene solamente i nomi delle squadre e i rispettivi falli subiti

const foulsCompiledTeams = teams.reduce((acc, team) => {
    acc.push({name : team.name, fouls : team.fouls});
    return acc;
},[]);

//Stampo il nuovo array
console.log(foulsCompiledTeams);