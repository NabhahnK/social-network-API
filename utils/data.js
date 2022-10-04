const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const email = [
  'bob@email.com',
  'Aaran@gmail.com',
  'Parker@gmail.com',
  'Nathaniel@gmail.com',
  'Farish@gmail.com',
  'Grace@gmail.com',
  'Zubair@gmail.com',
  'Ziyaan@gmail.com',
  'Zion@gmail.com',
  'Zenith@gmail.com',
  'Coollastname@gmail.com',
];

const thoughtText = [
  'bob',
  'sam',
  'tam'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  getRandomArrItem(usernames);

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomEmails = (int) => {
  return getRandomArrItem(email);
};

const getRandomText = () => {
  return getRandomArrItem(thoughtText);
}

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmails, getRandomText };
