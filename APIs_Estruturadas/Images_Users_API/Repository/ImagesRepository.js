const mysql = require('mysql');

function conectar() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        // database: 'desafio'
    });
    
    connection.connect();
    
    connection.query( 'CREATE DATABASE IF NOT EXISTS desafio', (err, result) => {
        console.log((err) ? err : result);
    });


    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'desafio'
    });;
}

function criarTabelaUsers() {
    const connection = conectar();
    
    const createUsuarioTableQuery = `
        CREATE TABLE IF NOT EXISTS USUARIO (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            data_criacao VARCHAR(255) NOT NULL
        )
    `;
    
    connection.query(createUsuarioTableQuery, (err) => {
        console.log((err) ? err : "USUARIO criada se já não existe.");
    });
}

function criarTabelaImagem() {
    const connection = conectar();
    
    const createImagemTableQuery = `
        CREATE TABLE IF NOT EXISTS IMAGEM (
            id INT AUTO_INCREMENT PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            referencia VARCHAR(255) NOT NULL,
            data_criacao VARCHAR(255) NOT NULL
        )
    `;

    connection.query( createImagemTableQuery , ( err ) => {
        console.log( (err) ? err : "IMAGEM criada se já não existe." );
    } )
}

module.exports = { conectar, criarTabelaUsers , criarTabelaImagem };