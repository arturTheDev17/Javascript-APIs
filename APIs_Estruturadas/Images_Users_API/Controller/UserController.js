const userService = require('../Service/UserService');

const getApp = require('../app');

const app = getApp();

app.post( '/usuarios' , ( req , res ) => {

    res.json( userService.createUser( req ) );
})

app.get( '/usuarios' , ( req , res ) => {
    
    res.json( userService.getUsers( ));

})

app.get( '/usuarios/:id' , ( req , res ) => {
    const id = req.params.id;
    
    res.json( userService.getUser( id ));
    
})

app.put( '/usuarios/:id' , ( req , res ) => {
    
    res.json( userService.editUser( req.params.id, req ));
})

app.delete( '/usuarios/:id' , ( req , res ) => {
    const id = req.params.id;
    
    userService.deleteUser( id );
    // const query = `DELETE FROM USUARIO WHERE id = ${id}`;

    // connection.query( query , (err, result) => {
    //         console.log((err) ? err : result);
    //         res.json( { "message": (result.affectedRows == 0) ? `Usuario de id ${id} nao encontrado` : `Usuario de id ${id} deletado com sucesso` } );
    // })
})