// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 35,
    description: 'bg',
    image: ' ',
    color: ' '
  },

  {
    firstName: 'toto',
    lastName: 'mont',
    occupation: 'sans emploi',
    age: 34,
    description: 'con',
    image: ' ',
    color: ' '
  },

  {
    firstName: 'babar',
    lastName: 'elephant',
    occupation: 'directeur',
    age: 45,
    description: 'gros',
    image: ' ',
    color: ' '
  },

  {
    firstName: 'jean',
    lastName: 'louisDavid',
    occupation: 'coiffeur',
    age: 65,
    description: 'bien coiffé',
    image: ' ',
    color: ' '
  },

  {
    firstName: 'jacque',
    lastName: 'atali',
    occupation: 'economiste',
    age: 76,
    description: 'intello',
    image: ' ',
    color: ' '
  },

  {
    firstName: 'Dan',
    lastName: 'bilzérian',
    occupation: 'acteur',
    age: 35,
    description: 'musclé',
    image: ' ',
    color: ' '
  }
];

// Rooms Array

const roomsArray = [
  { name: 'room1' },
  { name: 'room2' },
  { name: 'room3' },
  { name: 'room4' },
  { name: 'room5' },
  { name: 'room6' },
  { name: 'room7' },
  { name: 'room8' },
  { name: 'room9' },
  { name: 'room1' },
  { name: 'room1' },
  { name: 'room1' },
  { name: 'room1' },
  { name: 'room1' },
  { name: 'room1' }
];

// Weapons Array

const weaponsArray = [
  { name: 'kalash', weight: 500 },
  { name: 'kalash1', weight: 500 },
  { name: 'kalash2', weight: 500 },
  { name: 'kalash', weight: 500 },
  { name: 'kalash', weight: 500 },
  { name: 'kalash', weight: 500 },
  { name: 'kalash', weight: 500 },
  { name: 'kalash', weight: 500 },
  { name: 'kalash', weight: 500 }
];

// ITERATION 2

function selectRandom(card) {
  return card[Math.floor(Math.random() * card.length)];
}

function pickMystery() {
  let suspect = selectRandom(suspectsArray);
  let room = selectRandom(roomsArray);
  let weapon = selectRandom(weaponsArray);

  let objMyst = { suspect, room, weapon };
  return objMyst;
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
