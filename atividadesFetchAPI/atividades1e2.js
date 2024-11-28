/*1. **Requisição Simples:**
- Faça uma requisição `GET` para a API pública JSONPlaceholder e exiba os títulos dos posts no console.
*/

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => console.log(json))
/*2. **Filtrando Dados:**
    - Use a API do JSONPlaceholder para buscar comentários de um post específico e exiba apenas os que contêm a palavra "dolor".
*/

fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => response.json())
      .then(json => { 
        json.forEach(comment => {
            if(comment.body.includes('dolor')){
                console.log(comment)
            }
        });
      })



