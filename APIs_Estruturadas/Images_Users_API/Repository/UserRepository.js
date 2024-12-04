const { User } = require("../Model/User");
const { connection } = require("../Service/ConnectionService");
function createUser( user = User ) {

    const query = `INSERT INTO USUARIO (nome, data_criacao) VALUES 
                    ('${user.nome}', '${user.data_criacao}')`;

    connection.conectar().query( query , (err, result) => {
            console.log((err) ? err : result);
            return result;
    })

}

function listarUsuarios() {
    const query = `SELECT * FROM USUARIO`;

    connection.conectar().query( query , (err, result) => {
            console.log((err) ? err : result);
            return result;
    })
}

function getUser( id ) {
    const query = `SELECT * FROM USUARIO WHERE id = ${id}`;

    connection.conectar().query( query , (err, result) => {
            console.log((err) ? err : result);
            return result;
    })
}

function editUser( user = User ) {

    const query = `UPDATE USUARIO SET 
                     nome = '${user.nome}',
                     data_criacao = '${user.data_criacao}'
                     WHERE id = ${user.id}`;

    connection.conectar().query( query , (err, result) => {
            console.log((err) ? err : result);
            return result;
        })
}
module.exports = { createUser , listarUsuarios , getUser , editUser };
