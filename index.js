const { app } = require('./build/server.js');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening to the server on port:', port));
