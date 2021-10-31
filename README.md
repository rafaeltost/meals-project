# Meals Project

Para o Front-End do projeto, foi desenvolvido uma aplicação utilizando o Angular conectado a uma API em Java. Ambos executando em Cloud.

Para adaptação do Angular ao Heroku foi necessária criação de um servidor node.js para conexão.

O desafio foi conectar a um Back-End, receber objetos do tipo "Refeição" e filtra-lós através do nome.  A filtragem é realizada no Client, através da implementação `Two Way Data Binding` do Angular.

Para ficar mais próximo de um cenário real, foi incrementado o método "Creat new meal", onde o usuário cadastra refeições informando a url de uma thumbnail, nome, categoria, área e instruções de cozimento. As informações são persistidas através da API, em um banco de dados em memória, criando sua própria lista de refeições personalizada.

**IMPORTANTE 01:** Para primeira utilização, é necessário cadastrar algumas refeições. Dessa forma o filtro começará a funcionar. (Caso a filtragem não fique habilitada instantaneamente após realizar algum cadastro, basta recarregar o browser(F5)).



**Sugestão de dados do tipo "Refeição" para testar a aplicação:**

- `https://www.themealdb.com/api/json/v1/1/search.php?s=`



**Ponto de acesso Heroku:**

- https://meals-project.herokuapp.com/meals

  

**Para executar a aplicação localmente:**

- No terminal do projeto, utilize o comando `ng serve`

  - **Ponto de acesso para o Client:**

    Local: `http://localhost:4200/`



**IMPORTANTE 02:** A rota default da API esta configurada com o Heroku. Porém, o servidor entra no modo sleeping após 30 minutos de inatividade. Caso algum problema aconteça com as requisições ou deseje trabalhar de forma local, é necessário modificar manualmente a rota da API no arquivo `Meals.service.ts`  para `http://localhost:8080/api/v1/meals` . Dessa forma poderá rodar os dois projetos ao mesmo tempo na maquina.



**Visão geral do projeto com lista de refeições adicionada:**

![9a26f0f1-8e71-4526-8023-6f828b66a387](C:\Users\Rafael\Desktop\9a26f0f1-8e71-4526-8023-6f828b66a387.jpg)

**Filtragem:**

![c117e3dd-a8c6-41b9-a5e8-e4a6bebc4af2](C:\Users\Rafael\Desktop\c117e3dd-a8c6-41b9-a5e8-e4a6bebc4af2.jpg)

