const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('returnOriginal', false);

// create models
require( '../models/Workshop' );

const { NODE_ENV, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

console.log( connectionStr );

console.log( `Connecting to database ${DB_NAME}` );

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', error => {
    console.error( `Could not connect to database ${DB_NAME}, error = `, error.message );
    process.exit( 1 );
});

mongoose.connection.on('open', function () {
    console.log( `Connected to database ${DB_NAME}` );
});