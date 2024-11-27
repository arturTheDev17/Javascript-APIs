const express = require('express');
const app = express();

app.use( express.json() );

let musicas = [
    {id: 1, musica: "Musica 1"},
    {id: 2, musica: "Musica 2"},
    {id: 3, musica: "Musica 3"}
];

app.get('/musicas', (req, res) => {
    res.json(musicas);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

//1 - criar uma rota p/ listat 1 musica (passando um param na rota)

app.get('/musicas/:id', (req, res) => {
    const id = req.params.id;
    const musica = musicas.find( (musica) => musica.id == id);
    if(musica){
        res.json(musica);
    }
});

//2 - p/listar somente o nome da musica

app.get('/musicas/:id/nome', (req, res) => {
    const id = req.params.id;
    const musica = musicas.find( (musica) => musica.id == id);
    if(musica){
        res.json(musica.musica);
    }
})


//3 - um post para inserir uma musica e retornar a lista atualizada

app.post( '/musicas' , ( req , res ) => {
    console.log( req.query.id );
    const id = ( typeof(req.query.id) === 'number' ) ? req.query.id : musicas.length + 1;
    const musica = req.body[ "musica" ];
    musicas.push( { id : id , musica : musica } );

    res.json( musicas );
})