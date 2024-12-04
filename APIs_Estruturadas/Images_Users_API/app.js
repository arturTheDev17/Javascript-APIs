const express = require('express');

const app = express();
app.use( express.json() );

function getApp() { return app; }

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000\nhttp://localhost:3000');
});

module.exports = getApp;