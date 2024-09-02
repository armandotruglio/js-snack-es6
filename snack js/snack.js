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

