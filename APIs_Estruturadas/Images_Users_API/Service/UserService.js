const User = require('../Model/User');
const repository = require('../Repository/UserRepository');

function createUser( req ) {
    
    const user = new User( req.body.nome, req.body.data_criacao );

    return repository.createUser( user );

}

function getUsers( ) {

    return repository.listarUsuarios();

}

function getUser( id ) {

    return repository.getUser( id );

}

function editUser( req ) {
    
    const user = new User( req.params.id , req.body.nome, req.body.data_criacao );

    return repository.editUser( user );
}

module.exports = { createUser , getUsers , getUser , editUser };