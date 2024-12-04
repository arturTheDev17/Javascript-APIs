//^DESAFIO(Obrigatório) 

const express = require('express');
const conexao = require('./conexao');

const app = express();

app.use( express.json() );

// Criar um service para conetar ao banco de dados MYSQL
const connection = conexao.conectar();

conexao.criarTabelaUsers();
conexao.criarTabelaImagem();

//?Criar um CRUD de IMAGEM ( id, referencia, data_criacao, titulo)
app.post( '/imagens' , ( req , res ) => {
    const titulo = req.body.titulo;
    const data_criacao = req.body.data_criacao;
    const referencia = req.body.referencia;

    const query = `INSERT INTO IMAGEM (titulo, data_criacao, referencia) VALUES 
                    ('${titulo}', '${data_criacao}' , '${referencia}')`;

    connection.query( query , (err, result) => {
            console.log((err) ? err : result);
    })

    res.json( { "message": "Imagem adicionada com sucesso" } );
})

app.get( '/imagens' , ( req , res ) => {
    const query = `SELECT * FROM IMAGEM`;

    connection.query( query , (err, result) => {
            console.log((err) ? err : result);
            res.json( result );
    })

})

app.get( '/imagens/:id' , ( req , res ) => {
    const id = req.params.id;
    const query = `SELECT * FROM IMAGEM WHERE id = ${id}`;

    connection.query( query , (err, result) => {
            console.log((err) ? err : result);
            res.json( ( Array.from( result ).length == 0 ) ? { "message":  `Imagem de id ${id} nao encontrada`} : result );
    })
})

app.put( '/imagens/:id' , ( req , res ) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const data_criacao = req.body.data_criacao;
    const referencia = req.body.referencia;


    const query = `UPDATE IMAGEM SET 
                    titulo = '${titulo}',
                    referencia = '${referencia}',
                    data_criacao = '${data_criacao}'
                    WHERE id = ${id}`;

    connection.query( query , (err, result) => {
            console.log((err) ? err : result);
            res.json( { "message": (result.affectedRows == 0) ? `Imagem de id ${id} nao encontrada` : `Imagem de id ${id} modificada com sucesso` } );
    })
})

app.delete( '/imagens/:id' , ( req , res ) => {
    const id = req.params.id;
    const query = `DELETE FROM IMAGEM WHERE id = ${id}`;

    connection.query( query , (err, result) => {
            console.log((err) ? err : result);
            res.json( { "message": (result.affectedRows == 0) ? `Imagem de id ${id} nao encontrada` : `Imagem de id ${id} deletada com sucesso` } );
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000\nhttp://localhost:3000');
});