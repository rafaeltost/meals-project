# Meals Project

Para o Front-End do projeto, foi desenvolvido uma aplicação utilizando o Angular conectado a uma API em Java na nuvem.

O desafio foi conectar a um Back-End, receber objetos do tipo "Refeição" e filtra-lós através do nome.  

O filtro é realizado no Client, através da implementação `Two Way Data Binding` do Angular.

Para ficar mais próximo de um cenário real, foi incrementado o método "Creat new meal", onde o usuário cadastra refeições informando a url de uma thumbnail, nome, categoria, área e instruções de cozimento. As informações são persistidas através da API, em um banco de dados em memória, criando sua própria lista de refeições personalizada.

**IMPORTANTE 01:** Para primeira utilização, talvez seja necessário cadastrar algumas refeições. Dessa forma o filtro começará a funcionar. (Caso a filtragem não fique habilitada instantaneamente após realizar algum cadastro, basta recarregar o browser(F5)).

**Sugestão de dados do tipo "Refeição" para testar a aplicação:**

- `https://www.themealdb.com/api/json/v1/1/search.php?s=`

**Para executar a aplicação:**

- No terminal do projeto, utilize o comando `ng serve`

  - **Ponto de acesso para o Client:**

    Local: `http://localhost:4200/`



**IMPORTANTE 02:** As rota default da API esta configurada com o Heroku. Porém, o servidor entra no modo sleeping após 30 minutos de inatividade. Caso algum problema aconteça com as requisições ou deseje trabalhar de forma local, é necessário modificar manualmente a rota da API no arquivo `Meals.service.ts`  para `http://localhost:8080/api/v1/meals` . Dessa forma poderá rodar os dois projetos ao mesmo tempo na maquina.



  