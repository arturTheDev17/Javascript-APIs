const express = require('express');
const app = express();

app.use( express.json() );

//*1 - Criar um endpoint básico de GET que retorna uma mensagem simples.

app.get( '/hello' , ( req , res ) => {
    res.json( {"message": "Olá Mundo!"} )
});

//*2 - Criar um endpoint que aceite um parâmetro de nome e retorne uma mensagem personalizada.

app.get( '/greet/:name' , ( req , res ) => {
    const name = req.params.name;
    res.json( { "message": `Olá, ${name}!`} );
} )

//*3 - Criar um endpoint que receba dois números como parâmetros e retorne a soma deles.

app.get( '/sum' , ( req , res ) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json( { "result": Number(a) + Number(b) } )
} )

//*4 - Criar um endpoint que receba dois números e retorne a subtração do primeiro pelo segundo.

app.get( '/subtract' , ( req , res ) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json( { "result": Number(a) - Number(b) } )
} )

//*5 - Criar um endpoint que receba dois números e retorne o produto deles.

app.get( '/multiply' , ( req , res ) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json( { "result": Number(a) * Number(b) } )
} )

//*6 - Criar um endpoint que receba dois números e retorne o quociente da divisão do primeiro pelo segundo.

app.get( '/divide' , ( req , res ) => {
    const a = req.query.a;
    const b = req.query.b;
    res.json( { "result": Number(a) / Number(b) } )
} )

//*7 - Criar um endpoint que receba um número e informe se ele é par ou ímpar.

app.get( '/check-parity/:number' , ( req , res ) => {
    if ( Math.abs(req.params.number % 2 ) === 0 ) {
        res.json( {"parity": "par"} );

    } else if ( Math.abs( req.params.number % 2 ) === 1 ) {
        res.json( {"parity": "ímpar"} );

    } else {
        res.json( "Não válido" );

    }
} )

//*8 - Criar um endpoint que aceite dois parâmetros (primeiro nome e sobrenome) e retorne o nome completo.
app.get( '/full-name' , ( req , res ) => {
    const first_name = req.query.first_name;
    const last_name = req.query.last_name;
    res.json( {"full_name": `${first_name} ${last_name}`} )
} )

//*9 - Criar um endpoint que converta uma temperatura em Celsius para Fahrenheit.
app.get( '/convert-temperature' , ( req , res ) => {
    const celsius = req.query.celsius;
    res.json( {"fahrenheit": (celsius * 9/5) + 32} );
})

//*10 - Criar um endpoint que calcule a idade de uma pessoa com base no ano de nascimento.

app.get( '/calculate-age/:birth_year' , ( req , res ) => {
    const birth_year = req.params.birth_year;
    const current_year = new Date().getFullYear();
    res.json( {"age": current_year - birth_year} );
})

app.listen( 3000 , () => {
    console.log( "Rodando a atividade na porta 3000\n http://localhost:3000" );
} )