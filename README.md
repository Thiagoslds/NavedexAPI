# NavedexAPI
Repositório para a API Navedex. Cadastro com email e senha para acessar e modificar os navers e seus projetos.

# Tecnologias
* Typescript
* Postgres
* Typeorm
* Docker
* Insomnia

# Inicializando

Necessário a utilização do Postgres. Para a criação do banco de dados, foi utilizado a estrutura de containers. Como exemplo de criação usando docker:
``` bash
sudo docker run --name navedex_postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
```
Note que foi utilizado a porta 5433. Username ```postgres```, Senha ```docker``` e database ```navedex_db```.
Para a aplicação, será necessário instalar as dependências:
``` bash
yarn install
```
Depois rodamos as migrations:
``` bash
yarn typeorm migration:run  
```
Para iniciar a aplicação:
``` bash
yarn dev:server
```

# Funcionalidades
Temos três entidades, Users, Navers e Projects. Para executar cada funcionalidade é necessário ter a porta 3334 disponível. A url base é ```http://localhost:3334/```. Para acessar cada funcionalidade:

- ```users/signup``` para criar um novo usuário;
- ```login``` para fazer o login, onde gerará um ```Bearer``` token JWT que deve ser utilizado em cada requisição posterior.
- ```projects/store``` para criar um projeto
- ```navers/store``` para criar um naver
- ```navers/show/id_desejado``` para mostrar determinado naver, passando o id
- ```projects/show/id_desejado``` para mostrar determinado project, passando o id
- ```navers/index``` para mostrar todos os navers
- ```projects/index``` para mostrar todos os projects
- ```navers/update/id_desejado``` para atualizar um naver, passando o id
- ```projects/update/id_desejado``` para atualizar um project, passando o id
- ```navers/delete/id_desejado``` para deletar um naver, passando o id
- ```projects/delete/id_desejado``` para deletar um project, passando o id
- ```projects/show/name?name=valor_desejado``` para mostrar os projects filtrados pelo nome
- ```navers/show/name?name=valor_desejado``` para mostrar os navers filtrados pelo nome
- ```navers/show/job?job=valor_desejado``` para mostrar os navers filtrados pela profissão
- ```navers/show/date?date=valor_desejado``` para mostrar os navers admitidos após a data passada, no formato (YYYY-MM-DD)



