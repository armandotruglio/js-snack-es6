//SNACK 5

const words = ['pippo', 'PLUTO', 'Paperino', 'Qui', 'quo', 'QUA'];

const capitalizedWords = words.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase());

console.log(capitalizedWords);

//SNACK 6

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'giraffa', famiglia: 'giraffidae', classe: 'mammiferi' },
    { nome: 'delfino', famiglia: 'delfini oceanici', classe: 'mammiferi' },
    { nome: 'balena', famiglia: 'cetacei', classe: 'mammiferi' },
    { nome: 'maiale', famiglia: 'suidi', classe: 'mammiferi' },
    { nome: 'cavallo', famiglia: 'equidi', classe: 'mammiferi' },
    { nome: 'pecora', famiglia: 'bovidi', classe: 'mammiferi' },
    { nome: 'topo', famiglia: 'muridi', classe: 'mammiferi' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' }
]

const mammals = animals.filter(animal => animal.classe === 'mammiferi');

//SNACK 7

/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età. */

const people = [
    {
        firstName: 'Armando',
        lastName: 'Truglio',
        age: 24
    },
    {
        firstName: 'Tizio',
        lastName: 'Caio',
        age: 43
    },
    {
        firstName: 'Giovanni',
        lastName: 'Sempronio',
        age: 16
    },
    {
        firstName: 'Francesco',
        lastName: 'Rossi',
        age: 20
    },
    {
        firstName: 'Tiziano',
        lastName: 'Ferro',
        age: 50
    },
    {
        firstName: 'Emilio',
        lastName: 'Bianchi',
        age: 5
    },
    {
        firstName: 'Marco',
        lastName: 'Verdi',
        age: 14
    },
    {
        firstName: 'Antonio',
        lastName: 'Primi',
        age: 90
    },
    {
        firstName: 'Ernesto',
        lastName: 'Presti',
        age: 36
    },
    {
        firstName: 'Emiliano',
        lastName: 'Carrello',
        age: 17
    },
]

const drivers = people.reduce((acc, person) => {
    if (person.age >= 18) 
        acc.push(`Il sig. ${person.lastName} ${person.firstName} è abilitato a conseguire una patente di guida in quanto maggiorenne`);
    return acc;
}, []);

console.log(drivers);

