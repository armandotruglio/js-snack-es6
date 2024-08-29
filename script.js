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


//SNACK 2

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