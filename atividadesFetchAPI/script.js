/*3. **Clima Dinâmico:**
    - Crie um formulário HTML para inserir o nome de uma cidade e, ao enviar o formulário, exiba a temperatura atual usando a API OpenWeatherMap.
*/


fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=MTHCZTVREQRFPG9FGXZJQE8J6')
      .then(response => response.json())
      .then(json => { 
        console.log(json)
      })