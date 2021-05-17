/* Connection to MongoDB database (hosted locally) */

const mongoose = require('mongoose');

// CONNECTION
connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};  // check for other options for production

mongoose.connect('mongodb://localhost:27017/videochat-app', connectionOptions)
    .catch(err => console.log(err)); // change uri for production

// connection event listeners
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Failed to estabilish a connection to the database:'));
db.on('connecting', () => console.log('Connecting to the database...'));
db.once('connected', () => console.log('Connected to the database.'));
db.once('disconnected', () => console.log('Lost connection to the database!'));
db.once('reconnected', () => console.log('Reconnected to the database.'));

// SCHEMAS
const p = new mongoose.Schema({
    email: { type: String, required: true, trim: true, lowercase: true },
    username : { type: String, required: true, trim: true, lowercase: true, minLenght: 3 },
    password: { type: String, required: true },
    emailVerified: { type: Boolean, required: true, default: false },
    psyIdVerified: { type: Boolean, required: true, default: false },
    accountEnabled: { type: Boolean, required: true, default: true },
    psyId: { type: String },
    fullName: { type: String, required: true },
    newsletter: { type: Boolean },
    dateJoined: { type: Date, required: true },
    bio: { type: String, required: false, trim: true, maxLength: 180 },
    propicString: { type: String, required: false, trim: true, lowercase: true }
}, );

const c = new mongoose.Schema({
    code: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true }
});

// MODELS
const Professional = mongoose.model('Professional', p);
const Code = mongoose.model('Code', c);

// just an example: populating the db
/*
const myPsychologist = new Professional({
    email: 'bread@psylean.com',
    username: 'bread',
    password: 'blablabla',
    fullName: 'Alexandru Gabriel Bradatan',
    dateJoined: Date.now()
})
myPsychologist.save();
*/

// EXPORTS
module.exports = { Professional, Code };