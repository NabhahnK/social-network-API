const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const { getRandomName, getRandomEmails, getRandomText } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // await Application.deleteMany({});
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  // const applications = getRandomApplications(10);
  const thoughts = [];

  for (let i = 0; i < 3; i++) {
    const thoughtText = getRandomText();
    const username = getRandomName();

    thoughts.push({
      thoughtText,
      username
    });
  }

  await Thought.collection.insertMany(thoughts);

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = getRandomEmails();

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
  // await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});